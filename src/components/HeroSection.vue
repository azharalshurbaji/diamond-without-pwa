<template>
  <section
    class="background"
  >
    <!-- class="bg-surface-variant" -->
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          lg="5"
          sm="6"
        > 
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <v-img
              src="/assets/main-img/d-4.png"
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          sm="5"
          class="offset-1 ms-5"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <p class="text-h4 myFont text-white">
              {{ $t('heroTitle.title') }}
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2600"
          >
            <p class="text-body-2 text-white font-weight-light py-5">
              {{ $t('fakeParagraph.fakeParagraph') }}
            </p>
          </div>
          <div
            class="my-3"
            data-aos="fade-left"
            data-aos-duration="2600"
          >
            <v-btn
              class=""
              color="white"
              hover
            >
              order now
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import aos from 'aos'
  export default {
    data(){
      return {
        //
      }
    },

        // render: (h) => h(App),
    mounted() {
      aos.init()
    },


  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

.myFont {
  font-family: 'Abril Fatface', cursive !important;
}

.background
{
  background-image: linear-gradient(to top ,rgba(0,0,0,.5) ,rgba(0,0,0,.5)),url(/assets/main-img/g-2.png); 
  background-color: #000;
}
.img-position
{
  margin: 0 auto;
}
.card-img
{
  box-shadow: 0 0 10px rgba(185, 183, 183, 0.867);
}

@media screen and (max-width: 1264px) {
  .block-item{
    display: block !important;
  }
}


</style>