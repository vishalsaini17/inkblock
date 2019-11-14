
<?php require 'database/conn.php'; ?>
<?php require "required/head-links.php" ;?>


<body class="indicator-true" id="creativity">


<div class="page-indicator">
    <div class="indicator" id="down-slider"> <span class="indicator-progress"></span> </div>
    <!-- <i class="fas fa-sort-down" ></i> -->
    <!-- <img src="assets/img/Path 59.svg" id="indicate-next" alt=""> -->
  </div>

<?php require "required/navbar.php" ?>

<div class="body-wrapper">

    <section class="section-hello " id="creative-section">
      <div class="container-fluid pl-2">
        <div class="row creativity">
          <div class="col-md-9 mt-3">
            <h1 id="creative-heading">
              Let’s dive into <br>
              the world of <strong class="text-primary">creativity.</strong>
            </h1>
          </div>
          <div class="col-12 text-right">
            <div class="text-hello" id="hello-aniamte"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="who-we-are ">
      <div class="my-container what-we-padding">
        <div class="row align-items-center ">
          <div class="col-6 col-md-6 col-md px-0">
            <div class="col-12 wwa-right d-flex align-items-center pr-0">
              <div class="col-12 px-0">
                <h3>Who we are...</h3>
                <p><span> Ink Block Studio  </span>is an India based creative design agency built by experienced design enthusiasts with the main focus in helping you grow your brand.</p>
                    <a href="about.php" class="btn my-btn">Read more</a>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-6 py-4 text-right">
            <img src="assets/img/logo-blue-big.svg" alt="inkBlock" class="blue-logo">
          </div>
        </div>
      </div>
    </section>

    <section class="wwd-section ">
      <div class="my-container wwd-padding">
        <h3>How we help</h3>
        <div class="d-flex wwd-row justify-content-between pl-1">
          <div class="mt-5 mt-lg-4">
            <a href="help.php#design" class=" text-decoration-none help-link" data-index='0'>
              <div class="wwd-card wwd-card-blue has-circle">
                <div class="text">UI/UX Design</div>
                <div class="shape shape-blue"></div>
              </div>
            </a>
          </div>
          <div class="mt-5 mt-lg-4">
            <a href="help.php#brand" class="d-inline-block text-decoration-none help-link" data-index='1'>
              <div class="wwd-card wwd-card-orange">
                <div class="text">Brand Identity</div>
                <div class="shape shape-orange"></div>
              </div>
            </a>


          </div>
          <div class="mt-5 mt-lg-4">
            <a href="help.php#digital" class="d-inline-block text-decoration-none help-link" data-index='2'>
              <div class="wwd-card wwd-card-purple has-semi-circle">
                <div class="text">Digital Media</div>
                <div class="shape shape-purple"></div>
              </div>
            </a>


          </div>
        </div>
      </div>
    </section>

    <section class="work-section " id="work">
      <div class="container-fluid pl-2">
        <div class="work-wrapper d-flex">
          <ul class="list-unstyled work-list">
          <?php
          if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
               $project_name=$row['project_name']; 
               $catagory_name=$row['category_name']; 
               $index=$row['index']; 
          ?>
            <li><a href="project.php" class="projects-link" data-name='<?php echo $project_name ?>' alise='<?php echo $catagory_name ?>' data-index=<?php echo $index ?>><?php echo $project_name ?> <small><?php echo $catagory_name ?></small></a></li>

            <?php
            }
            ?>
          </ul>

          <?php
           while($row = mysqli_fetch_assoc($resulti)) {
            $cover_image=$row['cover_image']; 
       ?>
          
          <div class="work-images-list">
            <div class="work-item__image">
              <div class="mask">
                <div class="image-container" style='background-image: url("projects/<?php echo $cover_image ?>")'></div>
              </div>
            </div>

             <?php
            }
            ?>
          
            <?php
          } else {
              echo "0 results";
          }
          ?>
          </div>

        </div>
      </div>
    </section>

    <section class="contact-section d-flex align-items-center " id="contact">
      <div class="container-fluid w-100 pl-2">
        <div class="row creativity align-items-center">
          <div class="col-12 col-md-5">
            <h4 class="say-hi">Say Hi!</h4>
            <p class="contact-subtitle m-0">We are always excited to hear a new idea!</p>

            <form action="#" class="col-12 col-lg-11 px-0 pt-4" id="contact-form" name="myForm">
              <div class="form-row contact-form">
                <div class="col-12 col-md-6 form-group">
                  <input type="text" class="form-control your-name" placeholder="Name" name="your_name">
                  <div class="invalid-tooltip">
                      Enter Your name.
                    </div>
                </div>
                <div class="col-12 col-md-6 form-group">
                  <input type="text" class="form-control email-input" placeholder="Email" name="from_email">
                  <div class="invalid-tooltip">
                      Please enter valid email address.
                    </div>
                </div>
                <div class="col-12 col-md-6 form-group">
                  <input type="number" class="form-control phone-number" placeholder="Phone" name="phone_no" id="phone_no" >
                  <div class="invalid-tooltip">
                      Please enter valid phone number.
                    </div>
                </div>
                <div class="col-12 col-md-6 form-group" data-toggle="dropdown">
                  <div class="d-flex form-menu">
                  <input type="text" autocomplete="off" class="form-control" placeholder="How did you find us" name="found_us">
                  <i class="fas fa-angle-left"></i>
                  </div>
                  <ul class="form-menu-list dropdown-menu" id="exampleFormControlSelect1">
                    <li><a class="dropdown-item" href="#"> Mouth of word (Friend, Refer..) </a></li>
                    <li><a class="dropdown-item" href="#"> instagram </a></li>
                    <li><a class="dropdown-item" href="#"> Facebook </a></li>
                    <li><a class="dropdown-item" href="#"> Behance </a></li>
                    <li><a class="dropdown-item" href="#"> Dribbble </a></li>
                  </ul>
                  <!-- <div class="invalid-tooltip">
                      Please enter valid phone number.
                    </div> -->
                </div>
                <div class="col-12 form-group">
                  <textarea class="form-control" rows="6" cols="30" placeholder="Tell us something..."
                    name="message_html" required></textarea>
                </div>
                <div class="col-12 form-group contact-form-btn pt-2">
                  <button class="btn submit-btn" id="form-btn">SUBMIT</button>
                </div>
                <div class="col-12 form-group contact-form-btn mt-4">
                  <a href="javascript:;">contact@inkblockstudio.com</a>
                  <p class="mt-2">(+91) 8861 3333 62</p>
                </div>
              </div>
            </form>
          </div>
          <div class="col-12 col-md text-right contact-img">
            <img src="assets/img/contact_illustration.svg" class="img-fluid">
          </div>
        </div>
      </div>
    </section>

  <?php require "required/footer.php" ?>
  <?php require "required/foot-link.php" ?>

  <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
  <script type="text/javascript">
    (function () {
      emailjs.init("user_oBHPufvMtEDOpvbWBnEXi");
    })();
  </script>


  <!-- <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></!--> -->
  <!-- <script type="text/javascript"> -->
    <!-- (function () { -->
      <!-- emailjs.init("user_fmcEgWCWJ9qx7Mfk8dCe6"); -->
    <!-- })(); -->
  <!-- </script> -->

<script>
  $(".home-scroll").click(function () {
    // $( this ).slideUp();
    smoothScroll();
  });
</script>