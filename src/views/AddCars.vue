<template>
  <section>
      <div class="w-8/12 mx-auto mt-24">
        <div class="form_box w-1/2 px-16 py-16 mx-auto ">
            <form  action="">
                 <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Model Name
                    </label>
                    <input
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="model_name"
                    type="text"
                    placeholder="Model Name"
                    v-model="modelName"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Model image
                    </label>
                    <label
                    class="shadow
                        block
                        mt-2
                        file_label
                        cursor-pointer
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline"
                    for="model_image"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="model_image"
                    ref="myFiles"
                    type="file"
                    placeholder="Model Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Description
                    </label>
                    <textarea
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="model_name"
                    type="text"
                    placeholder="Description"
                    v-model="description"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Power
                    </label>
                    <input
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="model_name"
                    type="text"
                    placeholder="Power"
                    v-model="power"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Transmission
                    </label>
                    <input
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="model_name"
                    type="text"
                    placeholder="Transmission"
                    v-model="transmission"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Mileage
                    </label>
                    <input
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="model_name"
                    type="text"
                    placeholder="Mileage"
                    v-model="mileage"
                    />
                </div>
                <div class="mt-12">
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="AddCars">Add Car</button>
                </div>
            </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      modelName: '',
      files: '',
      description: '',
      power: '',
      transmission: '',
      mileage: ''
    }
  },
  methods: {
    previewFiles (event) {
      var label = document.querySelector('.file_label')
      var fileLength = event.target.files.length
      if (fileLength === 0) {
        label.innerHTML = 'Select image'
      } else {
        var fileName = event.target.files[0].name
        label.innerHTML = fileName
      }
      var files = event.target.files || event.dataTransfer.files
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        vm.files = e.target.result
        console.log(vm.files)
      }
      reader.readAsDataURL(file)
    },
    AddCars () {
      this.axios
        .post(process.env.VUE_APP_API_URI_PREFIX + 'api/cars/store', {
          car_image: this.files,
          car_title: 'hyundai'
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.form_box{
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
}
</style>
