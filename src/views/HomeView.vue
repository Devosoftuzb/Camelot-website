<template>
  <Header />
  <main>
    <section>
      <div class="container mx-auto px-5">
        <div class="sm:mt-24 mt-10 flex items-center justify-between gap-20">
          <div class="2xl:w-[800px] lg:w-[600px]">
            <h1 class="font-bold 2xl:text-[40px] md:text-[35px] text-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime molestiae dolorum quod quo qui, commodi
              reiciendis
            </h1>
            <p class="mt-2 sm:text-[20px] text-[18px] sm:w-full w-[70%] font-medium">
              * Lorem ipsum dolor sit amet,
              consectetur adipisicing elit
            </p>

            <div class="lg:hidden block">
              <div
                class="relative 2xl:w-full lg:w-[430px] flex sm:justify-end justify-center lg:h-0 md:h-96 h-60 md:mt-36 md:mb-20 my-10">
                <img
                  class="absolute z-[-10] 2xl:w-[300px] 2xl:h-[300px] md:w-[250px] md:h-[250px] w-[150px] h-[150px] top-[-20px] left-12 md:left-40 md:top-[-80px] rounded-3xl"
                  src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="">
                <img
                  class="absolute 2xl:w-[300px] 2xl:h-[300px] md:w-[250px] md:h-[250px] w-[150px] h-[150px] md:right-32 right-10 top-14 rounded-3xl"
                  src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
                  alt="">
                <img
                  class="absolute 2xl:w-[300px] 2xl:h-[300px] md:w-[250px] md:h-[250px] w-[150px] h-[150px]  md:left-32 md:top-36 left-8 top-28 rounded-3xl"
                  src="https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg"
                  alt="">
              </div>
            </div>

            <div class="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
              <div class="flex items-center gap-3">
                <i class='bx bx-badge-check text-[50px] text-blue-400'></i>
                <p class="2xl:text-[20px] lg:text-[18px] text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit</p>
              </div>
              <div class="flex items-center gap-3">
                <i class='bx bx-swim text-[50px] text-blue-400'></i>
                <p class="2xl:text-[20px] lg:text-[18px] text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit</p>
              </div>
              <div class="flex items-center gap-3">
                <i class='bx bx-restaurant text-[50px] text-blue-400'></i>
                <p class="2xl:text-[20px] lg:text-[18px] text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit</p>
              </div>
              <div class="flex items-center gap-3">
                <i class='bx bxs-chat text-[50px] text-blue-400'></i>
                <p class="2xl:text-[20px] lg:text-[18px] text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit</p>
              </div>
            </div>

            <div class="mt-10 flex sm:flex-row flex-col items-center sm:gap-10 gap-5">
              <span class="sm:hidden block font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
              <button
                class="btn bg-[#292583] sm:w-[250px] w-full text-center sm:p-5 p-3 sm:text-[20px] font-bold text-white rounded-full border border-[#292583] hover:bg-white hover:text-[#292583]">Lorem</button>
              <span class="sm:block hidden font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
            </div>
          </div>

          <div class="lg:block hidden">
            <div class="relative 2xl:w-full lg:w-[430px] flex justify-end">
              <img
                class="absolute z-[-10] 2xl:w-[300px] 2xl:h-[300px] lg:w-[250px] lg:h-[250px] 2xl:top-[-180px] 2xl:left-[-220px] top-[-150px] left-0 rounded-3xl"
                src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="">
              <img class="2xl:w-[300px] 2xl:h-[300px] lg:w-[250px] lg:h-[250px] rounded-3xl"
                src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
                alt="">
              <img
                class="absolute 2xl:w-[300px] 2xl:h-[300px] lg:w-[250px] lg:h-[250px] 2xl:top-20 2xl:left-[-260px] top-16 left-[-40px] rounded-3xl"
                src="https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto px-5">
        <div class="sm:mt-32 mt-10 flex flex-col gap-10">
          <h2 class="md:text-[40px] sm:text-[30px] text-[24px] font-bold">Bizning Afzaliklarimiz</h2>
          <div class="grid sm:grid-cols-2 grid-cols-1 gap-7">
            <div v-for="i in store.advantages" :key="i.id" class="bg-blue-50 p-10 rounded-3xl flex flex-col gap-y-4">
              <i class='bx bx-globe sm:text-[50px] text-[35px] text-amber-700'></i>
              <h3 class="sm:text-[25px] text-[20px] font-bold text-gray-900">{{i.title}}</h3>
              <p class="sm:text-[18px] text-[14px] font-medium text-gray-500">
                {{i.body}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sm:mt-20 mt-10 overflow-x-hidden">
      <div class="container mx-auto p-5">
        <div class="items" data-v-e33b1926="">
          <div  v-for="i in store.slaydImg" :key="i.id"  class="entry" data-v-e33b1926="">
            <img class="sm:w-[400px] w-[250px] rounded-2xl"
             :src="CONFIG.API_URL + i.image"
              data-v-e33b1926 alt="" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto px-5">
        <div class="sm:mt-20 mt-10 flex flex-col gap-14">
          <div class="flex flex-col gap-3">
            <h2 class="md:text-[40px] sm:text-[30px] text-[24px] font-bold">Lorem, ipsum dolor sit amet consectetur
              adipisicing elit
            </h2>
            <p class="text-[20px] font-medium text-gray-600">2018-yil oktyabr oyidan 2023-yil aprel oyigacha bo‘lgan
              statistika</p>
          </div>
          <div class="flex lg:flex-row flex-col gap-8">
            <div class="bg-blue-50 rounded-3xl w-full flex flex-col justify-between">
              <div class="p-5">
                <h3 class="md:text-[40px] sm:text-[35px] text-[24px] font-bold">6000+</h3>
                <span class="text-[20px] font-medium text-gray-600">Shu kungacha bitirgan o‘quvchilar</span>
              </div>
              <img class="w-[200px]" src="https://najottalim.uz/assets/studentCap.png" alt="">
            </div>

            <div class="bg-blue-50 rounded-3xl w-full flex flex-col justify-between">
              <div class="p-5">
                <h3 class="md:text-[40px] sm:text-[35px] text-[24px] font-bold">85% - 95%</h3>
                <span class="text-[20px] font-medium text-gray-600">Shu kungacha o‘quvchilarning ishga joylashishi</span>
              </div>
              <img class="w-[200px]" src="https://najottalim.uz/assets/studentPortfel.png" alt="">
            </div>

            <div class="bg-blue-50 rounded-3xl w-full p-5">
              <div class="flex flex-col gap-5">
                <p class="text-[20px] font-medium">6 oylik tajribasi bor* bitiruvchilarning o‘rtacha oyligi</p>
                <div class="flex items-center justify-between">
                  <span class="text-[20px] font-medium text-gray-600">Dasturlash</span>
                  <span class="md:text-[30px] text-[24px] font-medium">$321</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[20px] font-medium text-gray-600">Marketing</span>
                  <span class="md:text-[30px] text-[24px] font-medium">$301</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[20px] font-medium text-gray-600">Dizayn</span>
                  <span class="md:text-[30px] text-[24px] font-medium">$371</span>
                </div>
                <i><span class="text-red-600">*</span> Zamonaviy kasblarda tajriba oshgani sari oylik ham doimiy oshib
                  boraveradi.</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto px-5">
        <div class="sm:mt-24 mt-10 flex lg:flex-row flex-col gap-10">
          <img class="w-full rounded-3xl"
            src="https://st3.depositphotos.com/8911320/33966/i/450/depositphotos_339665118-stock-photo-render-modern-office-interior.jpg"
            alt="">
          <div class="w-full bg-blue-50 p-8 rounded-3xl flex flex-col gap-2">
            <h1 class="md:text-[35px] sm:text-[30px] text-[24px] font-bold">
              Bepul konsultatsiya
            </h1>
            <p class="text-[18px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt sapiente corrupti pariatur
            </p>
            <form   @submit.prevent="createContact" action="" class="flex flex-col gap-5 mt-5">
              <input v-model="contact.name" class="w-full px-3 py-4 rounded-lg outline-[#3B82F6] border" type="text" placeholder="Ismingiz">
              <input v-model="contact.phone" class="w-full px-3 py-4 rounded-lg outline-[#3B82F6] border" type="text" name="" id=""
                placeholder="+998">
              <button class="bg-[#3B82F6] border border-[#3B82F6] p-5 mt-5 rounded-lg text-white hover:bg-blue-50 hover:text-[#3B82F6]">
                So`rov yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto px-5">
        <div class="sm:mt-20 mt-10 flex flex-col gap-10">
          <div class="flex items-center justify-between">
            <h2 class="md:text-[40px] sm:text-[30px] text-[24px] font-bold">Kurslar</h2>
            <select class="border p-3 rounded-lg outline-blue-500 cursor-pointer" name="" id="">
              <option value="" disabled selected>Barchasi</option>
              <option value="">Ingiliz tili</option>
              <option value="">Russ tili</option>
              <option value="">Turk tili</option>
            </select>
          </div>
          <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-5">
            <div  v-for="i in store.showLesson" :key="i.id" class="w-full bg-blue-50 rounded-3xl hover:shadow-lg cursor-pointer p-7 flex gap-5">
              <img class="w-[100px] h-[100px] rounded-3xl sm:block hidden"
                :src="CONFIG.API_URL + i.image"
                alt="">
              <div class="flex flex-col justify-between sm:gap-14 gap-5 w-full">
                <div class="flex flex-col gap-3">
                  <h3 class="sm:text-[25px] text-[20px] font-medium text-gray-900">{{i.name}}</h3>
                  <p class="sm:text-[18px] text-[14px] font-medium text-gray-500">{{i.continuity}} oy</p>
                </div>
                <span
                  class="flex items-center justify-between sm:text-[18px] text-[14px] font-medium text-gray-500">Dasturlash<span
                    class="px-5 py-1 rounded-full bg-fuchsia-200 text-yellow-700">Bootcamp</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sm:mt-20 mt-10 pt-5 2xl:backdrop:px-5">
      <h2 class="md:text-[50px] sm:text-[40px] text-[30px] text-blue-700 font-bold text-center">
        Bizning ustozlar
      </h2>
      <swiper class="swiper-preloader-spin"  :modules="modules" :slides-per-view="1" :space-between="50"
        navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
        @slideChange="onSlideChange" :autoplay="{ delay: 3000 }"> 
        <swiper-slide v-for="i in store.showTeachers" :key="i.id" class="pb-20 my-10">
          <div class="container mx-auto px-5">
            <div class="2xl:px-32 md:px-24 flex xl:flex-row flex-col items-center justify-between xl:gap-24 gap-14">
              <img class="sm:w-[350px] sm:h-[350px] w-[200px] h-[200px] rounded-full"
                :src="CONFIG.API_URL + i.image"
                alt="">
              <div class="flex flex-col gap-3 xl:text-start text-center">
                <h3 class="md:text-[40px] sm:text-[30px] text-[24px] text-gray-700 font-bold">{{i.full_name}}</h3>
                <p>{{i.info}}</p>
                <div class="flex gap-10 justify-between mt-10">
                  <div class="text-center">
                    <p class="2xl:text-[40px] lg:text-[30px] font-bold text-green-600 uppercase">{{i.profession }}</p>
                    <span class="text-[18px] font-medium text-gray-500">Lavozimi</span>
                  </div>
                  <div class="text-center">
                    <p class="2xl:text-[40px] lg:text-[30px] font-bold text-green-600 uppercase">{{i.experience}}</p>
                    <span class="text-[18px] font-medium text-gray-500">Experience</span>
                  </div>
                  <div class="text-center">
                    <p class="2xl:text-[40px] lg:text-[30px] font-bold text-green-600 uppercase">{{i.num_of_students}}</p>
                    <span class="text-[18px] font-medium text-gray-500">Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        

        <swiper-slide class="pb-20 my-10">
          <div class="container mx-auto px-5">
            <div class="2xl:px-32 md:px-24 flex xl:flex-row flex-col items-center justify-between xl:gap-24 gap-14">
              <img class="sm:w-[350px] sm:h-[350px] w-[200px] h-[200px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYLB3IWsTasUT1Kt1-UeUbzXQPQZDufxUkA&usqp=CAU"
                alt="">
              <div class="flex flex-col gap-3 xl:text-start text-center">
                <h3 class="md:text-[40px] sm:text-[30px] text-[24px] text-gray-700 font-bold">John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque tempore, consequuntur voluptas
                  expedita ducimus labore itaque, maiores quasi aliquam eum amet dolorem? Sapiente fuga in aliquam, quasi
                  sequi ipsa.</p>
                <div class="flex gap-10 justify-between mt-10">
                  <div class="text-center">
                    <p class="2xl:text-[40px] lg:text-[30px] font-bold text-green-600 uppercase">Dasturchi</p>
                    <span class="text-[18px] font-medium text-gray-500">Lavozimi</span>
                  </div>
                  <div class="text-center">
                    <p class="2xl:text-[40px] lg:text-[30px] font-bold text-green-600 uppercase">5 years</p>
                    <span class="text-[18px] font-medium text-gray-500">Experience</span>
                  </div>
                  <div class="text-center">
                    <p class="2xl:text-[40px] lg:text-[30px] font-bold text-green-600 uppercase">1000+</p>
                    <span class="text-[18px] font-medium text-gray-500">Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
        <section class="sm:mt-20 mt-10">
      <div class="container mx-auto px-5">
        <div class="flex items-center sm:mb-14 mb-10">
          <h1 class="sm:block hidden md:text-[40px] sm:text-[30px] text-[24px] font-bold w-full">
            Bizning manzillar
          </h1>
          <div class="flex items-center gap-5 w-full md:justify-end justify-between">
            <h2 class="text-[18px] font-medium">
              Filialni tanlang
            </h2>
            <select class="border p-3 rounded-lg outline-blue-500 cursor-pointer" name="" id="">
              <option value="">Chilonzor</option>
              <option value="">Chilonzor</option>
              <option value="">Chilonzor</option>
            </select>
          </div>
        </div>
        <div class="flex lg:flex-row flex-col gap-10 mb-10">
          <div class="w-full bg-blue-50 p-8 rounded-3xl flex flex-col gap-2">
            <h1 class="md:text-[35px] sm:text-[30px] text-[24px] font-bold">
              Bepul konsultatsiya
            </h1>
            <p class="text-[18px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt sapiente corrupti pariatur
            </p>
            <form   @submit.prevent="createContact" action="" class="flex flex-col gap-5 mt-5">
              <input v-model="contact.name" class="w-full px-3 py-4 rounded-lg outline-[#3B82F6] border" type="text" placeholder="Ismingiz">
              <input v-model="contact.phone" class="w-full px-3 py-4 rounded-lg outline-[#3B82F6] border" type="text" name="" id=""
                placeholder="+998">
              <button class="bg-[#3B82F6] border border-[#3B82F6] p-5 mt-5 rounded-lg text-white hover:bg-blue-50 hover:text-[#3B82F6]">
                So`rov yuborish
              </button>
            </form>
          </div>
          <h1 class="sm:hidden block text-[24px] font-bold">
            Bizning manzillar
          </h1>
          <div class="border p-5 rounded-3xl lg:w-[900px] flex flex-col gap-3">
            <h2 class="sm:text-[24px] text-[18px] font-bold ">
              Guliston
            </h2>
            <iframe class="w-full md:h-[300px] h-[200px] rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.0365145885467!2d68.79288094514469!3d40.51868399577471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b20744f37988af%3A0x5fe5538855c9a835!2z0JzQvtC70L7QtNC10LbQvdGL0Lkg0YbQtdC90YLRgA!5e0!3m2!1sru!2s!4v1708511491718!5m2!1sru!2s"
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h3 class="font-medium text-black text-[18px] border-b py-3">
              Chilonzor tumani Qatortol kochasi 1 uy
            </h3>
            <span class="flex flex-col font-medium text-gray-500 py-3 border-b">
              Mo`ljal
              <h3 class="font-medium text-black text-[18px]">
                Rayhon Milliy tamomlar
              </h3>
            </span>
            <span class="flex flex-col font-medium text-gray-500 py-3 border-b">
              Ish vaqti
              <h3 class="font-medium text-black text-[18px]">
                09:00 - 18:00
              </h3>
            </span>
            <span class="flex flex-col font-medium text-gray-500 py-3">
              Telefon
              <a class="font-medium text-black text-[18px]" href="!#">+998975556895</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { onMounted, ref, reactive } from "vue";
import axios from "@/services/axios";
import CONFIG from "@/stores/config";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Header,
    Footer,
    axios,
    CONFIG
  },
  setup() {

    const onSwiper = (swiper) => {

      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const contact = reactive ({
      name: "",
      phone: "",
    }) 
    const createContact = () => {
    const data = {
      name: contact.name,
      phone: String(contact.phone),
    };

    axios
        .post("/contact/create", data, {
        })
        .then((res) => {
            console.log(res)
            contact.name = "";
            contact.phone = "";
        })
        .catch((error) => {
            console.log(error);
        });
}

  const store = reactive({
            news: false,
            oneNews: false,
            newsData: false,
            teachers: false,
            showTeachers: [],
            lessons: false,
            showLesson: [],
            advantages: false,
            slaydImg:false,
            sch: 0,
            length: 0
        });



 const getAlladvantagesProduct = () => {
            axios
                .get("/advantages/find-all", {
                })
                .then((res) => {
                  
                    store.advantages = res.data
                    store.advantages = store.advantages.reverse()
                    
                })
                .catch((error) => {
                    console.log(error);
                });
                
        };
 const getAllSlaydImagesProduct = () => {
            axios
                .get("/slayd-images/find-all", {
                })
                .then((res) => {
                  
                    store.slaydImg = res.data
                    store.slaydImg = store.slaydImg.reverse()

                })
                .catch((error) => {
                    console.log(error);
                });
                
        };
const getAllLessonsProduct = () => {
            axios
                .get("/lessons/find-all", {
                })
                .then((res) => {
                    store.lessons = res.data
                    store.lessons = store.lessons.reverse()
                    if (store.lessons.length > 6) {
                        for (let i = 0; i < 6; i++) {
                            store.showLesson.push(store.lessons[i])
                        }
                    }
                    else {
                        store.showLesson = store.lessons
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };

const getAllTeachersProduct = () => {
            axios
                .get("/teachers/find-all", {
                })
                .then((res) => {
                    store.teachers = res.data
                    store.teachers = store.teachers.reverse()
                    store.teachers.sort(function (x, y) {
                        return (x.status === y.status) ? 0 : y.status ? -1 : 1;
                    });
                    if (store.teachers.length > 7) {
                        for (let i = 0; i < 7; i++) {
                            store.showTeachers.push(store.teachers[i])
                        }
                    }
                    else {
                        store.showTeachers = store.teachers
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };


onMounted(() => {
            getAllTeachersProduct()
            getAllLessonsProduct()
            getAlladvantagesProduct()
            getAllSlaydImagesProduct()
        });

    return {
      CONFIG,
      onMounted,
      store,
      createContact,
      contact,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, Autoplay]
    };

  },
};
</script>

<style lang="css" scoped>
.items[data-v-e33b1926] {
  display: flex;
  gap: 44px;
  align-items: center;
  width: -moz-fit-content;
  width: fit-content;
  width: -moz-max-content;
  width: max-content;
  animation: carouselAnim-e33b1926 60s infinite alternate linear;
  overflow-x: auto;
}

@keyframes carouselAnim-e33b1926 {
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(calc(-100% + 1500px));
  }
}

@keyframes swiper-preloader-spin {
  to {
    transform: rotate(1turn)
  }
}
button{
  background: linear-gradient(
    to left,
    #0866FF -100%,
    #292583
   
  );

  
}

button:hover{
  background: white;
}
.entry img{
  width:500px;
  height:400px;
   overflow: hidden;
    object-fit: cover;
    object-position: center;
}
@media(max-width:1300px){
  .entry img{
    width:200px;
    height:200px;
  }
}
</style>