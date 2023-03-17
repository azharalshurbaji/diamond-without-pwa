<template>
  <v-container id="about-me">
    <!-- * About Me -->
    <v-row
      
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
        xs="12"
        align="center"
      >
        <h2 class="text-h4 text-center myFont">
          Student
        </h2>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="4"
        sm="12"
        xs="12"
        align="center"
      >
        <v-card
          elevation="2"
          max-width="400"
          justify="center"
          align="center"
          class="card-circle"
        >
          <div class="card-image">
            <svg
              class="circle-chart"
              viewBox="0 0 33.83098862 33.83098862"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="circle-chart-background"
                strok-fill="orange"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="15.91549431"
              />
              <circle
                class="circle-chart-circle"
                stroke-width="1"
                stroke-dasharray="33,100"
                stroke-linecap="round"
                fill="none"
                cx="16.91549431"
                cy="16.91549431"
                r="15.91549431"
              />
            </svg>
            <div class="avatar">
              <img
                src="/assets/about/av-2.png"
                width="200"
                cover
                alt="av-1"
              >
            </div>
          </div>
          <h3 class="myFont">
            Azhar abd al-baqi al-shurbaji
          </h3>
          <v-card-text
            class="text-grey"
          >
            <p class="text-grey-darken-2 text-body-1 mb-3">
              <b>- Front-End developer -</b>
            </p>
            with a passion for problem solving and design, 
            my goal is to create websits with a clean code, fully responsive
          </v-card-text>

          <p>
            How do you take <span class="text-orange">your Coffee</span>?
          </p>

          <div class="text-center ma-5">
            <a
              href="https://github.com/azharalshurbaji"
              target="_blank"
            >
              <v-btn
                class="pa-3 btn-hover"
                elevation="1"
                hover
                size="larg"
                color="orange"
                variant="text"
                icon="mdi-github"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/azhar-al-shurbaji-8b62b7257"
              target="_blank"
            >
              <v-btn
                class="offset-1 pa-3 btn-hover"
                elevation="1"
                hover
                size="larg"
                color="orange"
                variant="text"
                icon="mdi-linkedin"
              />
            </a>

            <a
              href="https://codepen.io/azharalshurbaji"
              target="_blank"
            >
              <v-btn
                class="offset-1 pa-3 btn-hover"
                elevation="1"
                hover
                size="larg"
                color="orange"
                variant="text"
                icon="mdi-codepen"
              />
            </a>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <h1 class="text-h4 myFont text-center my-6">
          -- My Drawing in CSS --
        </h1>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <v-carousel 
          hide-delimiter-background
          show-arrows="hover"
        >
          <a
            href="https://azharalshurbaji.github.io/links/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/Flower2.png"
              lazy-src="/assets/protfolio/Flower2.png"
              cover
              class="flower-style"
            />
          </a>

          <a
            href="https://azharalshurbaji.github.io/Drawing-Avatar/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/Girls.png"
              lazy-src="/assets/protfolio/Girls.png"
              cover
            />
          </a>

          <v-carousel-item
            src="/assets/protfolio/Pikachu-CSS.png"
            lazy-src="/assets/protfolio/Pikachu-CSS.png"
            cover
          />

          <v-carousel-item
            src="/assets/protfolio/flower.png"
            lazy-src="/assets/protfolio/flower.png"
            cover
            class="flower-style"
          />

          <a
            target="_blank"
            href="https://azharalshurbaji.github.io/form-video-table/"
          >
            <v-carousel-item
              src="/assets/protfolio/Form-2.png"
              lazy-src="/assets/protfolio/Form-2.png"
              cover
              class="flower-style"
            />
          </a>

          <a
            target="_blank"
            href="https://azharalshurbaji.github.io/form-float/"
          >
            <v-carousel-item
              src="/assets/protfolio/Form.png"
              lazy-src="/assets/protfolio/Form.png"
              cover
              class="flower-style"
            />
          </a>

          <v-carousel-item
            src="/assets/protfolio/clock.png"
            lazy-src="/assets/protfolio/clock.png"
            cover
            class="flower-style"
          />

          <a
            target="_blank"
            href="https://azharalshurbaji.github.io/Neumorphic-Form-JS/"
          >
            <v-carousel-item
              src="/assets/protfolio/neumorphic.png"
              lazy-src="/assets/protfolio/neumorphic.png"
              cover
              class="flower-style"
            />
          </a>

          <a
            target="_blank"
            href="https://azharalshurbaji.github.io/Card-SVG-circle-border/"
          >
            <v-carousel-item
              src="/assets/protfolio/card-svg.png"
              lazy-src="/assets/protfolio/card-svg.png"
              cover
              class="flower-style"
            />
          </a>
        </v-carousel>

        <h1 class="text-h4 myFont text-center mt-10">
          -- My Projects --
        </h1>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="12"
        sm="12"
      >
        <v-carousel 
          hide-delimiter-background
          show-arrows="hover"
        >
          <a
            href="https://azharalshurbaji.github.io/Templete-Business-company/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/Innovative-Solutions.png"
              lazy-src="/assets/protfolio/template/Innovative-Solutions.png"
              title="Bootstrap"
            />
          </a>

          <a
            href=""
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/Nera-2.png"
              lazy-src="/assets/protfolio/template/Nera-2.png"
              cover
              class="flower-style"
              title="CSS"
            />
          </a>

          <a
            href="https://azharalshurbaji.github.io/fresh/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/fresh-bulma.png"
              lazy-src="/assets/protfolio/template/fresh-bulma.png"
              cover
              class="flower-style"
              title="Bulma Freamwork"
            />
          </a>

          <a
            href="https://azharalshurbaji.github.io/todolist-vue.js/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/todo-list-vue.png"
              lazy-src="/assets/protfolio/template/todo-list-vue.png"
              cover
              class="flower-style"
              title="Vue.js"
            />
          </a>

          <a
            href="https://azharalshurbaji.github.io/bitcoin-website/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/bitcoin.png"
              lazy-src="/assets/protfolio/template/bitcoin.png"
              cover
              class="flower-style"
              title="Bulma Freamwork"
            />
          </a>

          <a
            href="https://azharalshurbaji.github.io/brushes-shop/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/brush-shop.PNG"
              lazy-src="/assets/protfolio/template/brush-shop.PNG"
              cover
              class="flower-style"
              title="Bootstrap"
            />
          </a>

          <a
            href="https://azharalshurbaji.github.io/Perfume-shop/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/Perfume-shop.png"
              lazy-src="/assets/protfolio/template/Perfume-shop.png"
              cover
              class="flower-style"
              title="Bootstrap"
            />
          </a>

          <a
            href=""
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/todo-list-js.png"
              lazy-src="/assets/protfolio/template/todo-list-js.png"
              cover
              class="flower-style"
              title="java script"
            />
          </a>

          <a
            href="https://azharalshurbaji.github.io/seo-one-page-template/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/seo-website.png"
              lazy-src="/assets/protfolio/template/seo-website.png"
              cover
              class="flower-style"
              title="CSS"
            />
          </a>

          <a
            href="https://azharalshurbaji.github.io/My-website/"
            target="_blank"
          >
            <v-carousel-item
              src="/assets/protfolio/template/my-cv.png"
              lazy-src="/assets/protfolio/template/my-cv.png"
              class="flower-style"
              title="Bootstrap"
            />
          </a>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

.btn-hover:hover
{
  box-shadow: 0 0 20px #ffa500 !important;
  transition: .5s;
}

.card-circle
{
  position: relative;
}
.avatar 
{
    position: absolute;
    top: 26%;
    left: 50%;
    transform: translate(-50% , -50%);
    margin: 0 auto;
    -webkit-transform: translate(-50% , -50%);
    -moz-transform: translate(-50% , -50%);
    -ms-transform: translate(-50% , -50%);
    -o-transform: translate(-50% , -50%);
}

.circle-chart-background
{
    stroke-width: 1px;
    stroke: #00214e2a;
}
.circle-chart
{    margin: 30px;}
.circle-chart-circle
{
    border: 1px solid #4e05000a;
    stroke-dasharray: 0,100;
    transition: all .7s linear;
    -webkit-transition: all .7s linear;
    -moz-transition: all .7s linear;
    -ms-transition: all .7s linear;
    -o-transition: all .7s linear;
}

.card-circle:hover .circle-chart-circle
{
    stroke: #e76e0a;
    stroke-dasharray: 5 5 ;
}

</style>