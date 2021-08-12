<template>
    <Layout>
        <div v-if="this.$page.gcms.product" class="bg-gray-200 p-10 rounded-lg md:flex divide-x-2" >
            <div> 
              <g-image :src="product.images[0].url" class="" alt="new image" />    
            </div>
            <div class="">
                <div class="text-6xl">
                    <h1> {{ product.name }} </h1>
                </div>
                <p class="text-red-500 pt-2 pb-10">
                   ราคา {{ product.price}} บาท
                </p>
                <p > {{ product.description }} </p>
                <p class="text-gray-500 pt-5">หมวดหมู่ {{ product.categories[0].name }} </p>
                
            </div>
            
        </div>
    </Layout>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: '',
                description: '',
                images: [{
                    url: ''
                }],
                categories: [{
                    id: '',
                    name: ''
                }]

            }
        
        }
    },
    created(){
        this.product = this.$page.gcms.product
        console.log('Product here', this.product)
    }
}  
</script>

<page-query>
query GetProduct($id: ID) {
    gcms {
        product(where: {id: $id}) {
                id
            name
            description
            price
            images{
                url
            }
            categories {
                id
                name
            }
        }
    }
}
</page-query>
