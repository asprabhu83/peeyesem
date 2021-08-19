<template>
  <section>
      <div class="container flex justify-evenly mx-auto mt-24">
        <div class="w-1/4 ">
            <div class="tab_box px-3 py-6 ">
              <h1 class="font-bold tab_item tab_item1 text-md my-2 flex items-center justify-between  active  px-2 py-1" data-target="1" @click="tabFunc">Car Details <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item2 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="2" @click="tabFunc">Overview <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item3 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="3" @click="tabFunc">Overview Details <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item4 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="4" @click="tabFunc">Highlight <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item5 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="5" @click="tabFunc">Highlight Post <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item6 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="6" @click="tabFunc">Gallery <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item7 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="7" @click="tabFunc">Videos <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item8 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="8" @click="tabFunc">Colors <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item9 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="9" @click="tabFunc">Specifications <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item10 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="10" @click="tabFunc">Features Variant <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item11 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="11" @click="tabFunc">Features Model <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item12 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="12" @click="tabFunc">Variant Features <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item13 text-md my-2 flex items-center justify-between   px-2 py-1" data-target="13" @click="tabFunc">Price List <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
            </div>
        </div>
        <div class="w-2/5 px-8 pb-10">
          <div class="step step1 active">
                 <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
                 </div>
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
                    type="text"
                    placeholder="Model Name"
                    v-model="modelName"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="modeltype"
                  >
                    Model Type
                  </label>
                  <select
                    class="
                      shadow
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      cursor-pointer
                      leading-tight
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="modeltype"
                    v-model="modelType"
                  >
                  <option class="text-xl " value="">Choose Model Type</option>
                  <option class="text-xl" :value="model.id" v-for="model in models"
                    :key="model.id" >{{model.car_type}}</option>
                  </select>
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
                        modelImage
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
                    for="modelImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="modelImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="modelImage"
                    placeholder="Model Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-10">
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="1" data-next="2" @click="AddCars">submit</button>
                </div>
           </div>
           <div class="step step2">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
            <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Overview Description
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
                    type="text"
                    placeholder="Overview Description"
                    v-model="description"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Overview Image
                    </label>
                    <label
                    class="shadow
                        block
                        mt-2
                        overviewImage
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
                    for="overviewImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="overviewImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="overviewImage"
                    placeholder="Overview Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="2" data-prev="1" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="2" data-next="3" @click="AddCars">submit</button>
                </div>
           </div>
            <div class="step step3">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
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
                    type="number"
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
                    type="number"
                    placeholder="Mileage"
                    v-model="mileage"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="3" data-prev="2" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="3" data-next="4" @click="AddCars">submit</button>
                </div>
           </div>
           <div class="step step4">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
             <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Highlight Title
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
                    type="text"
                    placeholder="Highlight Title"
                    v-model="highlight"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="4" data-prev="3" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="4" data-next="5" @click="AddCars">submit</button>
                </div>
           </div>
           <div class="step step5">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="postsuccess == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
             <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Post Title
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
                    type="text"
                    placeholder="Post Title"
                    v-model="postTitle"
                    />
                </div>
                 <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Post Description
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
                    type="text"
                    placeholder="Post Description"
                    v-model="postDescription"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Post Image
                    </label>
                    <label
                    class="shadow
                        block
                        mt-2
                        postImage
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
                    for="postImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="postImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="postImage"
                    placeholder="Overview Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-5">
                  <button type="button" class="bg-blue-500 hover:bg-blue-700 flex items-center text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="5" data-next="6" @click="AddCars">Add <font-awesome-icon icon="plus"  size="1x" class="text-white cursor-pointer ml-2"  /></button>
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="5" data-prev="4" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="5" data-next="6" @click="NextTab">submit</button>
                </div>
           </div>
           <div class="step step6">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="gallerysuccess == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
               <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Gallery Image
                    </label>
                    <label
                    class="shadow
                        block
                        mt-2
                        galleryImage
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
                    for="galleryImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="galleryImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="galleryImage"
                    placeholder="Gallery Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-5">
                  <button type="button" class="bg-blue-500 hover:bg-blue-700 flex items-center text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="6" data-next="7"  @click="AddCars">Add <font-awesome-icon icon="plus"  size="1x" class="text-white cursor-pointer ml-2"  /></button>
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="6" data-prev="5" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="6" data-next="7" @click="NextTab">submit</button>
                </div>
           </div>
           <div class="step step7">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
               <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Model video
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
                    type="text"
                    placeholder="Youtube Link"
                    v-model="youtubeLink"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="7" data-prev="6" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="7" data-next="8" @click="AddCars">submit</button>
                </div>
           </div>
           <div class="step step8">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="colorsuccess == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
             <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Color Code
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
                    type="text"
                    placeholder="Color Code"
                    v-model="colorCode"
                    />
                </div>
                 <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Color Title
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
                    type="text"
                    placeholder=" Color Title"
                    v-model="colorTitle"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Color Image
                    </label>
                    <label
                    class="shadow
                        block
                        mt-2
                        colorImage
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
                    for="colorImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="colorImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="colorImage"
                    placeholder="Color Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-5">
                  <button type="button" class="bg-blue-500 hover:bg-blue-700 flex items-center text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="8" data-next="9" @click="AddCars">Add <font-awesome-icon icon="plus"  size="1x" class="text-white cursor-pointer ml-2"  /></button>
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="8" data-prev="7" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="8" data-next="9" @click="NextTab" >submit</button>
                </div>
           </div>
           <div class="step step9">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
             <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Specification Type
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
                    type="text"
                    placeholder="Specification Type"
                    v-model="specType"
                    />
                </div>
                 <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Specification Model
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
                    type="text"
                    placeholder="Specification Model"
                    v-model="specModel"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Specification Petrol
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
                    type="text"
                    placeholder="Specification Petrol"
                    v-model="specPetrol"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Specification Diesel
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
                    type="text"
                    placeholder="Specification Diesel"
                    v-model="specDiesel"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="9" data-prev="8" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="9" data-next="10" @click="AddCars">submit</button>
                </div>
           </div>
           <div class="step step10">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
             <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Feature Title
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
                    type="text"
                    placeholder="Feature Title"
                    v-model="feutureTitle"
                    />
                </div>
                 <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Feature Variant Title
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
                    type="text"
                    placeholder="Feature Variant Title"
                    v-model="featureVariantTitle"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="10" data-prev="9" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="10" data-next="11" @click="AddCars">submit</button>
                </div>
           </div>
          <div class="step step11">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
             <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Feature Type
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
                    type="text"
                    placeholder="Feature Type"
                    v-model="feutureType"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="10" data-prev="9" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="11" data-next="12" @click="AddCars">submit</button>
                </div>
            </div>
          <div class="step step12">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
             <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Variant Feature Type
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
                    type="text"
                    placeholder="Variant Feature Type"
                    v-model="variantFeutureType"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Variant Feature Value
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
                    type="text"
                    placeholder="Variant Feature Value"
                    v-model="variantFeutureValue"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="10" data-prev="9" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="12" data-next="13" @click="AddCars">submit</button>
                </div>
            </div>
            <div class="step step13">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
             <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Car Fuel Type
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
                    type="text"
                    placeholder="Car Fuel Type"
                    v-model="carFuelType"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Car Price
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
                    type="text"
                    placeholder="Car Price"
                    v-model="carPrice"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="10" data-prev="9" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="13" @click="AddCars">submit</button>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      postTable: [],
      cars: [],
      models: [],
      carId: '',
      overviewId: '',
      highlightId: '',
      featureVariantId: '',
      featureModelId: '',
      modelName: '',
      modelImage: '',
      modelType: '',
      overviewImage: '',
      postImage: '',
      galleryImage: '',
      colorImage: '',
      description: '',
      power: '',
      transmission: '',
      mileage: '',
      postsuccess: false,
      success: false,
      colorsuccess: false,
      error: false,
      gallerysuccess: false,
      highlight: '',
      postTitle: '',
      postDescription: '',
      youtubeLink: '',
      colorCode: '',
      colorTitle: '',
      specType: '',
      specModel: '',
      specPetrol: '',
      specDiesel: '',
      feutureTitle: '',
      featureVariantTitle: '',
      feutureType: '',
      variantFeutureType: '',
      variantFeutureValue: '',
      carFuelType: '',
      carPrice: ''

    }
  },
  mounted () {
    this.EditCars()
    this.GetModels()
  },
  methods: {
    previewFiles (event) {
      var label = document.querySelector('.' + event.target.getAttribute('data-file-target'))
      var fileLength = event.target.files.length
      if (fileLength === 0) {
        label.innerHTML = 'Select image'
      } else {
        var fileName = event.target.files[0].name
        label.innerHTML = fileName
      }
      var files = event.target.files || event.dataTransfer.files
      this.createImage(files[0], event.target.getAttribute('data-file-target'), fileLength)
    },
    createImage (file, path, flen) {
      var reader = new FileReader()
      var vm = this
      if (path === 'modelImage') {
        reader.onload = (e) => {
          vm.modelImage = e.target.result
        }
      }
      if (path === 'overviewImage') {
        reader.onload = (e) => {
          vm.overviewImage = e.target.result
        }
      }
      if (path === 'postImage') {
        reader.onload = (e) => {
          vm.postImage = e.target.result
        }
      }
      if (path === 'galleryImage') {
        reader.onload = (e) => {
          vm.galleryImage = e.target.result
        }
      }
      if (path === 'colorImage') {
        reader.onload = (e) => {
          vm.colorImage = e.target.result
        }
      }
      if (flen !== 0) {
        reader.readAsDataURL(file)
      }
    },
    // tabFunc (e) {
    //   var alltabs = document.querySelectorAll('.tab_item')
    //   alltabs.forEach(tab => {
    //     if (tab.classList.contains('active')) {
    //       tab.classList.remove('active')
    //     }
    //   })
    //   var alltabItems = document.querySelectorAll('.step')
    //   alltabItems.forEach(item => {
    //     if (item.classList.contains('active')) {
    //       item.classList.remove('active')
    //     }
    //   })
    //   var target = e.target.getAttribute('data-target')
    //   document.querySelector('.step' + target).classList.add('active')
    //   e.target.classList.add('active')
    // },
    NextTab (e) {
      var current = e.target.getAttribute('data-current')
      var next = e.target.getAttribute('data-next')
      document.querySelector('.step' + current).classList.remove('active')
      document.querySelector('.step' + next).classList.add('active')
      document.querySelector('.tab_item' + current).classList.remove('active')
      document.querySelector('.tab_item' + next).classList.add('active')
    },
    GetModels () {
      this.axios
        .get(process.env.VUE_APP_API_URI_PREFIX + 'api/car/types')
        .then((response) => {
          this.models = response.data.types
        })
        .catch((error) => {
          console.log(error)
        })
    },
    EditCars () {
      var id = this.$route.query.car_id
      this.axios
        .get(process.env.VUE_APP_API_URI_PREFIX + 'api/show/car/' + id)
        .then((response) => {
          this.carId = response.data.car.id
          this.modelName = response.data.car.car_title
          this.modelImage = response.data.car.car_image
          this.modelType = response.data.car.car_type_id
        })
        .catch((error) => {
          console.log(error)
        })
    },
    AddCars (e) {
      var target = e.target.getAttribute('data-current')
      var next = e.target.getAttribute('data-next')
      var btn = e.target
      btn.innerText = 'Loading'
      this.error = false
      if (target === '1') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/car', {
            id: this.carId,
            car_title: this.modelName,
            car_image: this.modelImage,
            car_type_id: this.modelType
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            this.carId = response.data.id
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')
            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '2') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/overview', {
            car_id: this.carId,
            car_description: this.description,
            overview_image: this.overviewImage
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            this.overviewId = response.data.id
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')

            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '3') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/overview_details', {
            overview_id: this.overviewId,
            car_power: this.power,
            car_transmission: this.transmission,
            car_mileage: this.mileage
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')

            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '4') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/highlight', {
            car_id: this.carId,
            highlight_title: this.highlight
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            this.highlightId = response.data.id
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')

            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '5') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/highlight_post', {
            highlight_id: this.highlightId,
            post_title: this.postTitle,
            post_description: this.postDescription,
            post_image: this.postImage
          })
          .then((response) => {
            btn.innerText = 'Add'
            this.postsuccess = true
            this.postTitle = ''
            this.postDescription = ''
            this.postImage = ''
            var label = document.querySelector('.postImage')
            label.innerHTML = 'Select image'
            setTimeout(() => {
              this.postsuccess = false
            }, 2000)
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '6') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/gallery', {
            car_id: this.carId,
            gallery_image: this.galleryImage
          })
          .then((response) => {
            this.gallerysuccess = true
            btn.innerText = 'Add'
            this.galleryImage = ''
            var label = document.querySelector('.galleryImage')
            label.innerHTML = 'Select image'
            setTimeout(() => {
              this.gallerysuccess = false
            }, 2000)
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '7') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/videolink', {
            car_id: this.carId,
            youtube_link: this.youtubeLink
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')

            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '8') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/carcolor', {
            car_id: this.carId,
            color_code: this.colorCode,
            color_title: this.colorTitle,
            color_image: this.colorImage
          })
          .then((response) => {
            btn.innerText = 'Add'
            this.colorsuccess = true
            this.colorCode = ''
            this.colorTitle = ''
            this.colorImage = ''
            var label = document.querySelector('.colorImage')
            label.innerHTML = 'Select image'
            setTimeout(() => {
              this.colorsuccess = false
            }, 2000)
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '9') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/specs', {
            car_id: this.carId,
            spec_type: this.specType,
            spec_model: this.specModel,
            spec_petrol: this.specPetrol,
            spec_diesel: this.specDiesel
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')

            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '10') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/variant', {
            car_id: this.carId,
            feature_title: this.feutureTitle,
            feature_variant_title: this.featureVariantTitle
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            this.featureVariantId = response.data.id
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')

            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '11') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/feature_model', {
            features_variant_id: this.featureVariantId,
            feature_type: this.feutureType
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            this.featureModelId = response.data.id
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')

            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '12') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/variant_feature', {
            features_model_id: this.featureModelId,
            variant_feature_type: this.variantFeutureType,
            variant_feature_value: this.variantFeutureValue
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            document.querySelector('.step' + target).classList.remove('active')
            document.querySelector('.step' + next).classList.add('active')

            document.querySelector('.tab_item' + target).classList.remove('active')
            document.querySelector('.tab_item' + next).classList.add('active')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
      if (target === '13') {
        this.axios
          .post(process.env.VUE_APP_API_URI_PREFIX + 'api/store/pricelist', {
            car_id: this.carId,
            features_variant_id: this.featureVariantId,
            car_fuel_type: this.carFuelType,
            car_price: this.carPrice
          })
          .then((response) => {
            btn.innerHTML = 'submit'
            this.$router.push('/cars-list')
          })
          .catch((error) => {
            btn.innerHTML = 'submit'
            this.error = true
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped>
.tab_box{
  box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
  border-radius: 10px;
}
.tab_item.active{
  background-color: #06b6d4;
  color: white;
  animation: fadeIn 1s;
}
@keyframes fadeIn {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
.step{
  display: none;
}
.step.active{
  display: block;
}
</style>
