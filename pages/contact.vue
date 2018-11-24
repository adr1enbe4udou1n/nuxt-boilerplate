<template>
  <div>
    <h1>Contact</h1>

    <b-form class="mb-4" @submit="onSubmit">
      <b-form-group
        id="exampleInputGroup1"
        label="Email address:"
        label-for="exampleInput1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="exampleInput1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="exampleInputGroup2"
        label="Your Name:"
        label-for="exampleInput2"
      >
        <b-form-input
          id="exampleInput2"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="exampleInputGroup3"
        label="Food:"
        label-for="exampleInput3"
      >
        <b-form-select
          id="exampleInput3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox id="exampleInput4" v-model="form.checked">
          Check me out
        </b-form-checkbox>
      </b-form-group>
      <b-btn type="submit" variant="primary" class="mr-1">Submit</b-btn>
      <b-btn type="reset" variant="secondary">Reset</b-btn>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: false,
        secret: 'S3CR3T'
      },
      foods: [
        {
          text: 'Select One',
          value: null
        },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn'
      ]
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
