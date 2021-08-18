<template>
  <Layout>
    <div class="flex rounded-lg space-x-2 ">
      <g-link to="/"  class="text-xl text-white w-full text-center bg-gray-600 p-3 rounded-lg ring-4 ring-blue-500">
        <button class=" hover:underline  cursor-pointer">แสดงทั้งหมด</button>
      </g-link>  
      <g-link to="/shirts/"  class="text-xl text-white w-full text-center bg-gray-600 p-3 rounded-lg">
        <button class=" hover:underline  cursor-pointer">เสื้อ</button>
      </g-link>
      <g-link to="/pants/"  class="text-xl text-white w-full text-center bg-gray-600 p-3 rounded-lg">
        <button class=" hover:underline  cursor-pointer">กางเกง</button>
      </g-link>
      <g-link to="/accessories/"  class="text-xl text-white w-full text-center bg-gray-600 p-3 rounded-lg">
        <button class=" hover:underline  cursor-pointer">อื่นๆ</button>
      </g-link>
      
    </div>
  <div class="flex">
    <div v-if="$page.gcms.products" class="product-grid">
      <div
        v-for="(product) in products"
        :key="product.id"
        class="flex-col"
      >
        <g-link :to="'product/' + product.id" class="link" >
        <div class="product-wrapper hover:bg-gray-400 ">
          <g-image v-for="(images, slug) in product.images" class="img" :key="slug" :src="images.url" />   
           <div class="product-content">
          <p class="product-name"> {{ product.name }}</p>
          <p class="product-price">{{ product.price}} บาท</p>
          <p class="product-category pt-2 hover:text-white">({{ product.categories[0].name}})</p>
        </div>    
        </div>
       
        </g-link>  
      </div>
    </div>
  </div>
  </Layout>
</template>

<script>
export default {

  data() {
    return {
      products: [{
        name: '',
        description: '',
        price: '',
        images: [{
          url: ''
        }],
        categories: [{
          name: '',
        }]
      }],
    }
  },
 
 created(){
  this.products = this.$page.gcms.products
 },
 
 
}
</script>

<page-query>

  {
    gcms{
      products {
        id
        name
        description
        price
        images {
          url
        }
        categories{
          name
        }
        slug
      }
    }
  }

</page-query>


<style>
.divide__between{
  display: flex;
  justify-content: space-between;
}

.button{
    display: flex;
    align-items: center;
    text-decoration: none;
    border: 1px solid #5828e8;
    width: 10rem;
    text-align: center;
    justify-content: center;
    height: 3rem;
    margin-top: .75rem;
    margin-bottom: .75rem;
    border-radius: 5px;
}

.button:hover{
  background: #5828e8;
  color: #f5f5f5;
}
.product-content{
  padding-top: 1.5rem;
  text-align: center;
}
.img{
  width: 300px;
  transition-delay: 500ms;
  object-fit: cover;
}
.product-grid{
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  justify-content: space-between;
}
.flex-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.link{
  display: flex;
  width: 100%;
  text-decoration: none;
  height: 100%;
}
.product-wrapper{
  padding: 1.5rem;
  width: 100%;
  border-radius: .5rem;
  position: relative;
  background-color: #dddddd;
}

.product-name{
  font-size: 1.125rem;
  color: #101b42;
  font-weight: 700;
  margin-bottom: .5rem;
}

.product-price{
  font-size: .875rem;
  color: rgb(255, 0, 255);
  font-weight: bold;
}

.product-category{
  font-size: .875rem;
  color: rgb(165, 165, 165);
  font-weight: bold;
}

@media(max-width: 760px){
  .product-grid{
    justify-content: center;   
     padding-right: 1rem;
  }
}
</style>
