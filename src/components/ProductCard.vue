<template>
  <!-- <v-card>
    <v-img
      :src="product.image[0]"
      height="200"
    />
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-title>{{ product.price }} $- {{ product.category }}</v-card-title>
    <v-card-title>{{ trucate(product.description) }}</v-card-title>

    <v-card-actions>
      <v-btn @click="addToCart({id ,title ,price ,image ,category})">
        <v-icon>mdi-cart</v-icon>
        add To cart
      </v-btn>
      <v-btn
        value="product"
        :to="{ name:`singleproduct` }"
        @click="ShowProductDetails({id ,title ,price ,image ,category})"
      >
        <v-icon>mdi-cart</v-icon>
        show
      </v-btn>
    </v-card-actions>
  </v-card> -->
  <v-row>
    <v-col>
      <v-card
        max-width="344"
        flat
      >
        <v-img
          class="align-end text-white my-3"
          height="300"
          alt="api-img"
          :src="image"
        />
        <v-divider />
        <p
          :class="highlightText"
          class="text-h6 text-center"
        >
          {{ title }}
        </p>
        <v-divider />
        <v-chip class="ma-3">
          {{ category }}
        </v-chip>
        <v-card-title class="text-grey">
          <RatingSection />
          {{ rating.rate }} 
          ({{ rating.count }}) 
        </v-card-title>
        <v-card-title class="text-black-lighten-1">
          <small>&dollar;</small>•<b>{{ price }}</b>
        </v-card-title>

        <v-specer />
        <v-card-actions>
          About product
          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down' "
            @click="show =! show"
          />
          <v-spacer />
          <v-card-actions>
            <v-item-group
              v-model="selection"
              multiple
            >
              <v-item v-slot="{ isSelected, toggle }">
                <v-img
                  class="text-right pa-2 text-red"
                  link
                  @click="toggle"
                >
                  <v-btn :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'" />
                </v-img>
              </v-item>
            </v-item-group>
          </v-card-actions>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider />
            <v-card-text>{{ description }}</v-card-text>
          </div>
        </v-expand-transition>

        <v-card-actions class="my-4">
          <v-btn
            class="bg-primary"
            :disabled="!isLoggedIn"
            @click="addToCart({id ,title ,price ,image ,category})"
          >
            <v-icon class="px-3">
              mdi-cart
            </v-icon>
            Add to Cart
          </v-btn>
          <v-btn
            color="primary"
            variant="outlined"
            class="text-body-1 ml-6"
            to="/singleproduct"
          >
            More Explore
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
        <v-divider />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import { mapActions, mapState } from 'pinia';
// import CartStore from '@/store/cart.js';
// import user from '@/store/user';
import RatingSection from './RatingSection.vue';


export default {

    components: { RatingSection, },

    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        rating: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
            show: false,
            selection: [],
        };
    },

    computed: {
      // ...mapState(user , ['isLoggedIn'])
    },

    methods: {
        // ...mapActions(CartStore, ["addToCart"])
    },


}
</script>

<style>

</style>