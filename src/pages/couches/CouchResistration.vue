<template>
  <section>
    <base-card>
      <h2>Register as a couch now</h2>
      <CouchForm @save-data="saveData"></CouchForm>
    </base-card>
  </section>
</template>

<script>
import CouchForm from '../../components/couches/CouchForm.vue';
export default {
  components: {
    CouchForm,
  },    
  methods: {
    saveData(data){
        this.$store.dispatch('couches/registerCouch', data)
        this.$router.replace('/couches')
    }
  }
};
</script>

<style scoped>

</style>
