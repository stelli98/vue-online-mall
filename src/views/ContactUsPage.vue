<template>
  <div>
    <div>
      <label>Full Name</label>
      <input type="text" class="double-input" v-model="formData.fullName">
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="formData.email">
    </div>
    <div>
      <label>Description</label>
      <textarea name id cols="30" rows="10" v-model="formData.description"></textarea>
    </div>
    <div>
      <button @click="submitForm">Submit</button>
    </div>
    <div>
      <p>{{formData}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      formData: {
        fullName: '',
        email: '',
        description: ''
      }
    }
  },
  methods: {
    submitForm () {
      alert('Data submitted')
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin: 20px;
}
</style>
