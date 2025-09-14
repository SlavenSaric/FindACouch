<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <RouterView></RouterView>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"> </base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            selectedCouch: null
        }
    },
    computed: {
        fullName(){
          return  this.selectedCouch.firstName + ' ' + this.selectedCouch.lastName
        },
        contactLink(){
            return this.$route.path + '/' + this.id + '/contact'
        },
        areas(){
            return this.selectedCouch.areas
        },
        rate(){
            return this.selectedCouch.hourlyRate
        },
        description(){
            return this.selectedCouch.description
        }
    },
    created(){
        this.selectedCouch = this.$store.getters['couches/couches'].find(couch => couch.id === this.id)
    }
}
</script>
