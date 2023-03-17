<template>
  <section>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="12"
          xs="3"
        >
          <v-chip class="product_number">
            {{ products.length }}
          </v-chip>
          <v-chip
            id="men_clothes_chip" 
            prepend-icon="mdi-vuetify"
            :class="[activeTab === '1' ? '' : 'active']"
            link
            @click="activeTab = '1'"
          >
            men's clothing
          </v-chip>
          <v-chip
            prepend-icon="mdi-vuetify"
            :class="[activeTab === '2' ? '' : 'active']"
            link
            @click="activeTab = '2'"
          >
            jewelery
          </v-chip>
          <v-chip
            prepend-icon="mdi-vuetify"
            :class="[activeTab === '3' ? '' : 'active']"
            link
            @click="activeTab = '3'"
          >
            women's clothing
          </v-chip>
          <v-chip
            prepend-icon="mdi-vuetify"
            :class="[activeTab === '4' ? '' : 'active']"
            link
            @click="activeTab = '4'"
          >
            electronics
          </v-chip>

          <div class="tabs-content">
            <div
              v-if="activeTab === '1'"
              class="content-one"
            >
              Tab
            </div>
            <div
              v-if="activeTab === '2'"
              class="content-tow"
            >
              Tab women
            </div>
            <div
              v-if="activeTab === '3'"
              class="content-three"
            >
              Tab jewelery
            </div>
            <div
              v-if="activeTab === '4'"
              class="content-four"
            >
              Tab electronic
            </div>
          </div>

          <!-- <v-card width="700">
            <v-tabs
              v-model="tab"
              bg-color="primary"
            >
              <v-tab value="jewelery">
                men's clothing
              </v-tab>
              <v-tab value="two">
                women's clothing
              </v-tab>
              <v-tab value="three">
                jewelery
              </v-tab>
              <v-tab value="four">
                electronics
              </v-tab>
            </v-tabs>
            <v-window v-model="tab">
              <v-window-item value="jewelery">
                one
              </v-window-item>
              <v-window-item value="two">
                Two
              </v-window-item>
              <v-window-item value="three">
                Three
              </v-window-item>
              <v-window-item value="four">
                four
              </v-window-item>
            </v-window>
          </v-card> -->
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section>
    <v-row
      align="center"
      justify="center"
    >
      <v-col 
        cols="12"
        lg="4"
        xs="3"
      >
        <v-container>
          <v-row
            align="center"
            justify="start"
            class="mx-auto"
            max-width="500"
          >
            <v-col
              cols="12"
            >
              <v-text-field
                ref="search"
                v-model="searchValue"
                hide-details
                label="Search.."
                icon="mdi-search"
                single-line
              />
            </v-col>
            <v-col
              cols="12"
              lg="12"
              sm="3"
            >
              <div
                v-if="searchValue && ! filteredSearch.length"
                class="error"
              >
                <p class="text-h4 text-center text-grey">
                  {{ errorMsg }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>

  <section>
    <v-container>
      <v-row>
        <v-col 
          v-for="product in filteredSearch" 
          :key="product.id"
          cols="12" 
          sm="6" 
          lg="4" 
          xl="3"
        > 
          <ProductCard v-bind="product" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue';



export default {
    components: { ProductCard , },

    data() {
        return {
          products: [],
          colorTitle: 'highlightText',
          searchValue: '',
          errorMsg: 'No results Found !',
          activeTab: "1",
        }
    },
    computed: {
      filteredSearch() { 
          // return this.products.filter((post) => {
          // return post.title.toLowerCase().search(this.searchValue.toLowerCase()) !== -1
          //         })
        if (!this.searchValue) {
            return this.products
          }
          const re = new RegExp(this.searchValue, 'i');
          const filteredProducts = this.products.filter( product => {				
          return (
            product.title.match( re ) ||
            product.description.match( re ) 
          ); // return
        }); // filteredProducts
        return filteredProducts;
      },
            
      // product() {
      //   return {
      //     id: this.id,
      //     title: this.title,
      //   }
      // }

    },
    created()
    {
      this.loadProducts();
    },

    methods: {
        loadProducts() {
          this.axios.get('https://fakestoreapi.com/products')
            .then(response => this.products = response.data);
        // catch(error)
        // {
        //   if(error) 
        //   {
        //     alert("Loding Filed")
        //     console.log("loding filed")
        //   }
        // }  
      },

    // trucate(value , length = 50) {
    //     return value.length <= length ? value : value.substring(0 , length) + "..."
    // },

    highlightSearchResults(data) 
    {
      if(this.searchValue) {
        const re = new RegExp(this.searchValue, 'i');
        const highlightedData = data.replace( re,
			`<span class="highlightText">${this.searchValue}</span>` );
			return highlightedData;
          }  
    },
  }
}
</script>

<style>
.highlightText{
  background: yellow;
}
</style>
