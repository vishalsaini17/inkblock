<?php require "database/conn.php" ?>
<?php require "required/head-links.php" ?>
<?php require "required/navbar.php" ?>

<div class="body-wrapper ">
    <section class="project-detail pb-0">
        <div class="my-container">
            <div class="row">
                <div class="col-12 mb-5">
                    <div class="row align-items-sm-center project-btn">
                        <div class='col-6 col-sm-auto pb-4'>
                            <a href="#project_content" class="prev-link prev_btn" role="button" data-slide="prev"
                                data-index=""><i class="fas fa-caret-left pr-2"></i>PREV</a>
                        </div>
                        <div class="project-heading px-2">
                            <span id="project_name"></span>
                            <small id="alise_name"></small>
                        </div>
                        <div class='col-6 col-sm-auto pb-4 text-right text-sm-left'>
                            <a href="#project_content" class="next-link next_btn" role="button" data-slide="next"
                                data-index="">NEXT<i class="fas fa-caret-right pl-2"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-12 mb-5  carousel slide carousel-fade" id="project_content" data-ride="carousel">
                    <ul class="list-unstyled carousel-inner">
                        <?php                    
                              if(mysqli_num_rows($result) > 0){
                              while($row = mysqli_fetch_assoc($result)){
                                 $project_name = $row['project_name'];
                                 $category_name = $row['category_name'];
                                 $project_img =  $row['project_image'];
                                 $project_images = explode(",",$project_img);
                                 $project_length = sizeof($project_images);
                           ?>
                        <div data-name="<?php echo $project_name ?>" alise="<?php echo $category_name ?>" class="carousel-item my-slide" data-index="">
                            <section class="project-detail pb-0">
                                <div class="my-container">
                                    <div class="row">
                                        <div class="col-12 mb-5">
                                            <ul class="list-unstyled">
                                             <?php
                                              for($i=0;$i<$project_length;$i++){  ?>
                                              <li><img src="projects/<?php echo $project_images[$i] ?>" alt="project name" class="w-100 img-fluid have"></li>
                                             <?PHP } ?>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                        <?php
                                 }
                              }
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="all-projects">
        <div class="container-fluid">
            <div class="row justify-content-center all-projects-box align-items-center">
                <div class="col-lg-4 col-md-4 pb-3 text-sm-center ">
                    <h4>Prev</h4>
                    <div class="text-poistion">
                        <a id="prev_project" class="prev-link prev_btn" href="#project_content" role="button"
                            data-slide="prev" data-index=""></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 pb-3 text-sm-center all-projects-box-border">
                    <h4>Return to</h4>
                    <div class="text-poistion">
                        <a href="index.php#work">All projects</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 pb-3 text-sm-center">
                    <h4>Next</h4>
                    <div class="text-poistion">
                        <a id="next_project" class="next-link next_btn" href="#project_content" role="button"
                            data-slide="next" data-index=""></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php require "required/footer.php" ?>
    <?php require "required/foot-link.php" ?>
</div>