<?php

$userData = [
    'firstName' => 'Md',
    'lastName' => 'Rimel',
    'email' => 'rimel1111@gmail.com',
    'address' => 'Kingston, 5236, United States',
];

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $currentPassword = $_POST['currentPassword'];
    $newPassword = $_POST['newPassword'];
    $confirmNewPassword = $_POST['confirmNewPassword'];


    echo "Current Password: $currentPassword<br>";
    echo "New Password: $newPassword<br>";
    echo "Confirm New Password: $confirmNewPassword<br>";
}
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>Account</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A400%2C500%2C600"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter%3A700"/>
  <link rel="stylesheet" href="./styles/account.css"/>
</head>
<body>
<div class="account-exC">
  <div class="top-header-CTv">
    <p class="uncover-the-magic-of-roshanays-art-vault-where-every-stroke-tells-a-story-and-every-artwork-radiates-with-a-unique-brilliance-7Kz">
    Uncover the magic of Roshanay&#39;s Art Vault, where every stroke tells a story and every artwork radiates with a unique brilliance.
    <br/>
    
    <br/>
    
    <br/>
    
    </p>
    <div class="frame-746-ZBz">
      <p class="shopnow-J9a">ShopNow</p>
      <div class="frame-549-1Zn">
        <p class="english-vAx">English</p>
        <img class="dropdown-3mN" src="./assets/dropdown-cMJ.png"/>
      </div>
    </div>
  </div>
  <div class="auto-group-7rdj-xdS">
    <div class="header-Urg">
      <div class="frame-556-Cng">
        <p class="rag-YLk">RAV</p>
        <div class="frame-554-Tic">
          <p class="home-bpp">Home</p>
          <p class="contact-9LY">Contact</p>
          <p class="about-grG">About</p>
          <p class="sign-up-pxU">Sign Up</p>
        </div>
      </div>
      <div class="frame-552-AWY">
        <div class="search-component-set-8CU">
          <div class="frame-550-egc">
            <p class="what-are-you-looking-for-PeC">What are you looking for?</p>
            <img class="component-2-jCG" src="./assets/component-2-PkQ.png"/>
          </div>
        </div>
        <div class="frame-551-eq2">
          <img class="wishlist-zP6" src="./assets/wishlist-Kor.png"/>
          <img class="cart1-with-buy-WsE" src="./assets/cart1-with-buy-gct.png"/>
          <img class="user-T1n" src="./assets/user-5Xr.png"/>
        </div>
      </div>
    </div>
    <img class="line-3-Agt" src="./assets/line-3-vse.png"/>
    <div class="auto-group-rvs4-VjA">
      <div class="roadmap-D9N">
        <p class="account-Zyv">Home</p>
        <div class="auto-group-hgr8-WeG">
          <div class="line-13-F64">
          </div>
          <p class="nothing-y24">My Account</p>
        </div>
      </div>
      <p class="welcome-md-rimel-Jq2">
        <span class="welcome-md-rimel-Jq2-sub-0">Welcome! </span>
        <span class="welcome-md-rimel-Jq2-sub-1">Md Rimel</span>
      </p>
    </div>
    <div class="auto-group-2fxx-6np">
      <div class="auto-group-qyha-dXr">
        <p class="manage-my-account-aCC">Manage My Account</p>
        <div class="frame-839-7C8">
          <p class="my-profile-dwA">My Profile</p>
          <p class="address-book-n3N">Address Book</p>
          <p class="my-payment-options-vfN">My Payment Options</p>
        </div>
        <p class="my-orders-4Wg">My Orders</p>
        <div class="frame-840-Por">
          <p class="my-returns-KSc">My Returns</p>
          <p class="my-cancellations-rhS">My Cancellations</p>
        </div>
        <p class="my-wishlist-CFW">My WishList</p>
      </div>
      <div class="frame-838-YKN">
        <p class="edit-your-profile-GFN">Edit Your Profile</p>
        <div class="frame-848-bHe">
          <div class="frame-841-9KA">
            <p class="first-name-6EQ">First Name</p>
            <div class="placebox-info-dVE">Md</div>
          </div>
          <div class="frame-842-67v">
            <p class="last-name-qrC">Last Name</p>
            <div class="placebox-info-P72">Rimel</div>
          </div>
        </div>
        <div class="frame-849-5kY">
          <div class="frame-843-dXA">
            <p class="email-aSQ">Email</p>
            <div class="placebox-info-Wqr">rimel1111@gmail.com</div>
          </div>
          <div class="frame-844-RT2">
            <p class="address-P8x">Address</p>
            <div class="placebox-info-KoJ">Kingston, 5236, United State</div>
          </div>
        </div>
        <div class="frame-846-RrL">
          <div class="frame-845-NWg">
            <p class="password-changes-jME">Password Changes</p>
            <div class="placebox-info-fkg">Current Passwod</div>
          </div>
          <div class="placebox-info-AhS">New Passwod</div>
          <div class="placebox-info-rqA">Confirm New Passwod</div>
        </div>
        <div class="frame-847-Mmv">
          <p class="cancel-HvU">Cancel</p>
          <div class="button-2dA">Save Changes</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-GGc">
    <div class="frame-743-Ps2">
      <div class="auto-group-tv8c-7HE">
        <div class="frame-717-TM6">
          <div class="frame-716-PkY">
            <div class="frame-715-MBa">
              <p class="rag-7Ak">RAV</p>
              <p class="subscribe-qMe">Subscribe</p>
            </div>
            <p class="get-10-off-your-first-order-nGt">Get 10% off your first order</p>
          </div>
          <div class="send-mail-7KA">
            <p class="enter-your-email-ScL">Enter your email</p>
            <img class="icon-send-BK2" src="./assets/icon-send-cnx.png"/>
          </div>
        </div>
        <p class="support-Vac">Support</p>
      </div>
      <div class="frame-711-qPa">
        <p class="account-znG">Account</p>
        <div class="frame-710-8tU">
          <p class="my-account-5Yp">My Account</p>
          <p class="login-register-Df2">Login / Register</p>
          <p class="cart-xsW">Cart</p>
          <p class="wishlist-iLt">Wishlist</p>
          <p class="shop-GNQ">Shop</p>
        </div>
      </div>
      <div class="auto-group-vyvg-cSG">
        <div class="frame-709-ZcQ">
          <p class="quick-link-vC4">Quick Link</p>
          <div class="frame-708-s7J">
            <p class="privacy-policy-1jJ">Privacy Policy</p>
            <p class="terms-of-use-ZVv">Terms Of Use</p>
            <p class="faq-hs2">FAQ</p>
            <p class="contact-T5W">Contact</p>
          </div>
        </div>
        <img class="frame-742-nNg" src="./assets/frame-742-qZv.png"/>
      </div>
    </div>
    <div class="frame-643-7fr">
      <img class="underline-GYk" src="./assets/underline-y8Y.png"/>
      <div class="frame-66-Bvc">
        <img class="icon-copyright-u5v" src="./assets/icon-copyright-TEC.png"/>
        <p class="copyright-rimel-2022-all-right-reserved-1ue">Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  </div>
</div>
</body>