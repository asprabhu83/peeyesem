<template>
  <section>
      <div class="container flex justify-evenly mx-auto mt-24">
        <div class="w-1/4 ">
            <div class="tab_box px-3 py-6 ">
              <h1 class="font-bold tab_item tab_item1 text-md my-2 flex items-center justify-between cursor-pointer active  px-2 py-1" data-target="1" @click="tabFunc">Car Details <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item2 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="2" @click="tabFunc">Overview <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item3 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="3" @click="tabFunc">Overview Details <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item4 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="4" @click="tabFunc">Highlight <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item5 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="5" @click="tabFunc">Highlight Post <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item6 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="6" @click="tabFunc">Gallery <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item7 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="7" @click="tabFunc">Videos <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item8 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="8" @click="tabFunc">Colors <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item9 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="9" @click="tabFunc">Specifications <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item10 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="10" @click="tabFunc">Features Variant <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item11 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="11" @click="tabFunc">Features Model <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item12 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="12" @click="tabFunc">Variant Features <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
              <h1 class="font-bold tab_item tab_item13 text-md my-2 flex items-center justify-between cursor-pointer  px-2 py-1" data-target="13" @click="tabFunc">Price List <font-awesome-icon icon="chevron-right"  size="1x" class="text-white  mt-1" /></h1>
            </div>
        </div>
        <div class="w-2/5 px-8 pb-10">
          <div class="step step1 active">
                 <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
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
                <div class="mt-10">
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="1" data-next="2" @click="AddCars">submit</button>
                </div>
           </div>
           <div class="step step2">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="userrole"
                >
                  Model
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
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                  "
                  id="userrole"
                  v-model="userRole"
                >
                <option class="text-xl " value="">Choose Model</option>
                <option class="text-xl" :value="car.id" v-for="car in cars"
                  :key="car.id" >{{car.car_title}}</option>
                </select>
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
                    id="model_name"
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
                    placeholder="Overview Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="2" data-prev="1" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="2" data-next="3" @click="Nextstep">submit</button>
                </div>
           </div>
            <div class="step step3">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
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
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="3" data-prev="2" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="3" data-next="4" @click="Nextstep">submit</button>
                </div>
           </div>
           <div class="step step4">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
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
                    id="model_name"
                    type="text"
                    placeholder="Highlight Title"
                    v-model="highlight"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="4" data-prev="3" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="4" data-next="5" @click="Nextstep">submit</button>
                </div>
           </div>
           <div class="step step5">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
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
                    id="model_name"
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
                    id="model_name"
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
                    placeholder="Overview Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-5">
                  <button type="button" class="bg-blue-500 hover:bg-blue-700 flex items-center text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add <font-awesome-icon icon="plus"  size="1x" class="text-white cursor-pointer ml-2"  /></button>
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="5" data-prev="4" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="5" data-next="6" @click="Nextstep">submit</button>
                </div>
           </div>
           <div class="step step6">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
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
                    placeholder="Overview Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="6" data-prev="5" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="6" data-next="7" @click="Nextstep">submit</button>
                </div>
           </div>
           <div class="step step7">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
              </div>
               <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Model Video
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
                    Select video
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="video/*"
                    id="model_image"
                    ref="myFiles"
                    type="file"
                    placeholder="Overview Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="7" data-prev="6" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="7" data-next="8" @click="Nextstep">submit</button>
                </div>
           </div>
           <div class="step step8">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
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
                    id="model_name"
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
                    id="model_name"
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
                    placeholder="Overview Image"
                    @change="previewFiles"
                    />
                </div>
                <div class="mt-5">
                  <button type="button" class="bg-blue-500 hover:bg-blue-700 flex items-center text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add <font-awesome-icon icon="plus"  size="1x" class="text-white cursor-pointer ml-2"  /></button>
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="8" data-prev="7" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="8" data-next="9" @click="Nextstep">submit</button>
                </div>
           </div>
           <div class="step step9">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
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
                    id="model_name"
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
                    id="model_name"
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
                    id="model_name"
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
                    id="model_name"
                    type="text"
                    placeholder="Specification Diesel"
                    v-model="specDiesel"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="9" data-prev="8" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="9" data-next="10" @click="Nextstep">submit</button>
                </div>
           </div>
           <div class="step step10">
             <div class="msg_box h-12">
                   <div class="error py-3 text-green-500" v-if="success == true">Added Successfully</div>
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
                    id="model_name"
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
                    id="model_name"
                    type="text"
                    placeholder="Feature Variant Title"
                    v-model="featureVariantTitle"
                    />
                </div>
                <div class="mt-16 flex items-center justify-between">
                    <!-- <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="10" data-prev="9" @click="prevstep">Previous</button> -->
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full  py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-current="10" data-next="11" @click="Nextstep">submit</button>
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
      cars: [],
      modelName: '',
      files: '',
      description: '',
      power: '',
      transmission: '',
      mileage: '',
      success: false,
      highlight: '',
      postTitle: '',
      postDescription: '',
      colorCode: '',
      colorTitle: '',
      specType: '',
      specModel: '',
      specPetrol: '',
      specDiesel: '',
      feutureTitle: '',
      featureVariantTitle: ''
    }
  },
  mounted () {
    this.Getcars()
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
    tabFunc (e) {
      var alltabs = document.querySelectorAll('.tab_item')
      alltabs.forEach(tab => {
        if (tab.classList.contains('active')) {
          tab.classList.remove('active')
        }
      })
      var alltabItems = document.querySelectorAll('.step')
      alltabItems.forEach(item => {
        if (item.classList.contains('active')) {
          item.classList.remove('active')
        }
      })
      var target = e.target.getAttribute('data-target')
      document.querySelector('.step' + target).classList.add('active')
      e.target.classList.add('active')
    },
    // Nextstep (e) {
    //   var current = e.target.getAttribute('data-current')
    //   var next = e.target.getAttribute('data-next')
    //   var currentStep = document.querySelector('.step' + current)
    //   var nextStep = document.querySelector('.step' + next)
    //   var tabItem = document.querySelector('.tab_item' + next)
    //   var alltabs = document.querySelectorAll('.tab_item')
    //   alltabs.forEach(tab => {
    //     if (tab.classList.contains('active')) {
    //       var tabNum = tab.getAttribute('data-target')
    //       document.querySelector('.tab_item' + tabNum).classList.remove('active')
    //     }
    //   })
    //   tabItem.classList.add('active')
    //   currentStep.classList.remove('active')
    //   nextStep.classList.add('active')
    // },
    // prevstep (e) {
    //   var current = e.target.getAttribute('data-current')
    //   var prev = e.target.getAttribute('data-prev')
    //   var currentStep = document.querySelector('.step' + current)
    //   var prevStep = document.querySelector('.step' + prev)
    //   var tabItem = document.querySelector('.tab_item' + prev)
    //   var alltabs = document.querySelectorAll('.tab_item')
    //   alltabs.forEach(tab => {
    //     if (tab.classList.contains('active')) {
    //       var tabNum = tab.getAttribute('data-target')
    //       document.querySelector('.tab_item' + tabNum).classList.remove('active')
    //     }
    //   })
    //   tabItem.classList.add('active')
    //   currentStep.classList.remove('active')
    //   prevStep.classList.add('active')
    // },
    AddCars () {
      this.axios
        .post(process.env.VUE_APP_API_URI_PREFIX + 'api/cars/store', {
          car_title: this.modelName,
          car_image: 'hello'
        })
        .then((response) => {
          console.log(response)
          this.success = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    Getcars () {
      this.axios
        .get(process.env.VUE_APP_API_URI_PREFIX + 'api/cars/index')
        .then((response) => {
          this.cars = response.data
        })
        .catch((error) => {
          console.log(error)
        })
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
