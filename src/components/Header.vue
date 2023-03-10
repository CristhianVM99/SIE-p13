<template>
  <div class="menu-area menu-sticky">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3">
          <div class="logo-cat-wrap">
            <div class="logo-part">
              <a href="index.html">
                <img src="src/assets/images/logo.png" alt="Logo" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-9 align-items-center d-flex text- end justify-content-end">
          <div class="sc-menu-area">
            <div class="main-menu">
              <div class="mobile-menu">
                <a class="sc-menu-toggle">
                  <i class="fa fa-bars"></i>
                </a>
              </div>
              <nav class="sc-menu">
                <ul class="nav-menu">
                  <li class="menu-item-has-children current-menu-item">
                    <router-link :to="{ name: 'index' }"> Home </router-link>
                    <ul class="sub-menu">
                      <li class="current-menu-item">
                        <router-link :to="{ name: 'index' }"> Home One</router-link>
                      </li>
                      <li><router-link :to="{ name: 'index2' }"> Home Two</router-link></li>
                      <li><router-link :to="{ name: 'index3' }"> Home Three</router-link></li>
                      <li><router-link :to="{ name: 'index4' }"> Home Four</router-link></li>
                    </ul>
                  </li>
                  <li><router-link :to="{ name: 'about' }"> About </router-link></li>

                  <li class="menu-item-has-children">
                    <a href="#">Courses</a>
                    <ul class="sub-menu">
                      <li><a href="course.html">Courses Grid 3</a></li>
                      <li><a href="course2.html">Courses Sidebar 1</a></li>
                      <li><a href="course3.html">Courses Sidebar 2</a></li>
                      <li><a href="course4.html">Courses Sidebar 3</a></li>
                      <li><a href="course-single.html">Courses Single</a></li>
                    </ul>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="#">Team</a>
                        <ul class="sub-menu">
                          <li><router-link :to="{ name: 'team' }">Team</router-link></li>
                          <li><router-link :to="{ name: 'teamSingle' }">Team Single</router-link></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                        <ul class="sub-menu">
                          <li>
                            <router-link :to="{ name: 'gallery1' }">Gallery Grid</router-link>
                          </li>
                          <li>
                            <router-link :to="{ name: 'gallery2' }">Gallery Filter</router-link>
                          </li>
                          <li>
                            <router-link :to="{ name: 'gallery3' }">Gallery Masonry</router-link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Events</a>
                        <ul class="sub-menu">
                          <li><a href="events.html">Events 1</a></li>
                          <li><a href="events2.html">Events 2</a></li>
                          <li><a href="events-single.html">Events Single</a></li>
                        </ul>
                      </li>
                      <li><router-link :to="{ name: 'login' }">Login</router-link></li>
                      <li><router-link :to="{ name: 'login' }">Register</router-link></li>
                      <li><a href="error.html">404 Page</a></li>
                    </ul>
                  </li>

                  <li class="menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog2.html">Blog Sidebar</a></li>
                      <li><a href="blog-single.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <!-- //.nav-menu -->
              </nav>
            </div>
            <!-- //.main-menu -->
          </div>
          <div class="expand-btn-inner text-end">
            <ul>
              <li>
                <a
                  class="hidden-xs sc-search"
                  data-bs-target="#search-modal"
                  data-bs-toggle="modal"
                  href="#"
                >
                  <i class="flaticon flaticon-magnifying-glass"></i>
                </a>
              </li>
            </ul>
            <span>
              <a id="nav-expander" class="nav-expander">
                <span class="dot1"></span>
                <span class="dot2"></span>
                <span class="dot3"></span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent'
}
</script>
