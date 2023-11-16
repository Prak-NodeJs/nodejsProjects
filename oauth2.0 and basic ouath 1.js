// OAuth 1.0 and OAuth 2.0 are both protocols that allow third-party applications 
// to access resources on behalf of users. However, there are differences in their approach 
// to authentication and authorization.

// OAuth 1.0

// OAuth 1.0 is an older version of the OAuth protocol, It uses a signature-based method for 
// authentication and authorization. The process for obtaining an access token involves the following steps:

// 1. The third-party application requests a temporary token from the OAuth provider.
// 2. The user is redirected to the OAuth provider's website to authorize the request.
// 3. The user enters their credentials and grants permission to the third-party application.
// 4. The OAuth provider sends a verifier code to the user.
// 5.The third-party application sends the verifier code along with the temporary token to the OAuth provider.
// 6. The OAuth provider validates the temporary token and verifier code and issues an access token to the third-party application.     

// example code

// Create OAuth client
const client = new oauth.OAuth(
  'https://trello.com/1/OAuthGetRequestToken',
  'https://trello.com/1/OAuthGetAccessToken',
  API_KEY,
  API_SECRET,
  '1.0A',  //version
  OAUTH_CALLBACK_URL,
  'HMAC-SHA1'  //signature method
);


// Route for initiating OAuth authorization
app.get('/authorize', (req, res) => {
  client.getOAuthRequestToken((error, token, secret, results) => {
    if (error) {
      res.status(500).send(`Error getting OAuth request token: ${error}`);
    } else {
      // Save temporary token and secret for later use
      req.session.oauth_token = token;
      req.session.oauth_token_secret = secret;
      // Redirect user to Trello authorization page
      const authUrl = `https://trello.com/1/OAuthAuthorizeToken?${querystring.stringify({ oauth_token: token })}`;
      res.redirect(authUrl);
    }
  });
});

// Route for handling OAuth callback
app.get('/callback', (req, res) => {
  const { oauth_token, oauth_verifier } = req.query;
  // Verify the temporary token and verifier code
  client.getOAuthAccessToken(
    oauth_token,
    req.session.oauth_token_secret,
    oauth_verifier,
    (error, token, secret, results) => {
      if (error) {
        res.status(500).send(`Error getting OAuth access token: ${error}`);
      } else {
        // Save access token and secret for later use
        req.session.oauth_access_token = token;
        req.session.oauth_access_token_secret = secret;
        // Redirect user to profile page
        res.redirect('/profile');
      }
    }
  );
});

// Route for getting user profile information
app.get('/profile', (req, res) => {
  // Make authenticated request to Trello API to get user profile
  client.get(
    'https://api.trello.com/1/members/me',
    req.session.oauth_access_token,
    req.session.oauth_access_token_secret,
    (error, data, response) => {
      if (error) {
        res.status(500).send(`Error getting Trello profile: ${error}`);
      } else {
        // Parse response data as JSON and render it to template
        const profile = JSON.parse(data);
        res.render('profile', { profile });
      }
    }
  );
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});


//application that supports basic oauth 1.0
trello, flicker, twitter



// OAUTH2.0

// OAuth 2.0 is the current version of the OAuth protocol and is widely
// used today. It uses a token-based method for authentication and authorization.
// The process for obtaining an access token involves the following steps:

// 1. The third-party application requests an authorization code from the OAuth provider.
// 2.The user is redirected to the OAuth provider's website to authorize the request.
// 3. The user enters their credentials and grants permission to the third-party application.
// 4. The OAuth provider sends an authorization code to the user.
// 5. The third-party application sends the authorization code to the OAuth provider, along with its client ID and secret.
// 6.The OAuth provider validates the authorization code and issues an access token to the third-party application.


// example code

// Route for starting the OAuth process
app.get('/auth', (req, res) => {
  const params = qs.stringify({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'read_user',
  });

  res.redirect(`https://gitlab.com/oauth/authorize?${params}`);
});

// Route for handling OAuth callback
app.get('/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange authorization code for access token
    const { data } = await axios.post('https://gitlab.com/oauth/token', {
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    });

    const { access_token } = data;

    // Get user profile using access token
    const { data: userProfile } = await axios.get('https://gitlab.com/api/v4/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    res.send(`Hello, ${userProfile.name}`);
  } catch (error) {
    res.status(500).send(`Error getting GitLab access token: ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



// applications that supports oauth 2.0
gitlab, zoom, slack, linkedin, dropbox, paypal, google, etc
