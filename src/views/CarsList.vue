<template>
<section>
<div >
  <div class="w-8/12 mx-auto mt-24">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Model Name
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Model Type
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="car in cars" :key="car.id">
                  <td class="px-6 py-4 whitespace-nowrap" >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{car.id}}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap" >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{car.car_title}}
                    </span>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap" >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{car.car_type}}
                    </span>
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      flex
                      items-center
                      justify-start
                      whitespace-nowrap
                      text-right text-sm
                      font-medium
                    "
                  >
                    <font-awesome-icon icon="edit"  size="1x" class="text-green-600 mr-4 cursor-pointer mt-1" @click="Edit" />
                    <font-awesome-icon icon="trash"  size="1x" class="text-red-600 cursor-pointer mt-1" @click="DialogBox(car.id)" />
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
     <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="deleteDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
        <h1 class="text-xl text-center my-8 font-bold">
          Are you sure you want to delete this item?
        </h1>
        <div class="flex items-center justify-center my-6">
          <button
            class="bg-gray-400 mx-4 rounded-sm text-white py-1 px-6"
            @click="deleteDialog = false"
          >
            cancel
          </button>
          <button
            class="bg-red-700 mx-4 text-white rounded-sm py-1 px-6"
            data-car-id="" v-on:click="Delete"
          >
            ok
          </button>
        </div>
      </div>
     </div>
  </div>
</div>
<!-- <div class="my-60" >
  <h1 class="text-center text-2xl font-bold">You do not have authorization to this page, please contact admin</h1>
</div> -->
</section>
</template>

<script>
export default {
  data () {
    return {
      cars: [],
      deleteDialog: false
    }
  },
  mounted () {
    this.GetCarsList()
  },
  methods: {
    GetCarsList () {
      this.axios
        .get(process.env.VUE_APP_API_URI_PREFIX + 'api/cars/index')
        .then((response) => {
          this.cars = response.data.cars
        })
        .catch((error) => {
          console.log(error)
        })
    },
    DialogBox (id) {
      this.deleteDialog = true
      this.$el.setAttribute('data-car-id', id)
    },
    Delete () {
      var id = this.$el.getAttribute('data-car-id')
      this.axios
        .delete(process.env.VUE_APP_API_URI_PREFIX + 'api/cars/delete/' + id)
        .then(() => {
          this.deleteDialog = false
          this.GetCarsList()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.dialog_box {
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog_content {
  width: 500px;
  max-width: 100%;
}
</style>
