<template>
  <!-- TITLE -->
  <b-container fluid class="bg-contact ">
    <b-container class="">
    <b-row class="text-white text-left">
      <b-col cols="12" md="7" class="mt-50">
        <h2 class="font-italic mt-1 mb-7">GET IN TOUCH</h2>
      </b-col>
    </b-row>

    <!-- CONTACT FORM -->
    <div id="contact-form" class="mb-50">
 <b-form>
    <b-row class="text-white text-left">
      <b-col cols="12" md="3">
        <div role="group">
        <label class="sr-only" for="form-input-name">Name</label>
        <b-form-input
        id="form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="name"
        placeholder="Name"
        trim
        required>
        </b-form-input>
      </div>
    </b-col>

      <b-col cols="12" md="3">
        <div role="group">
        <label class="sr-only" for="form-input-email">Email</label>
        <b-form-input
        id="form-input-email"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="email"
        :state="isEmailStateValid"
        placeholder="Email"
        aria-describedby="form-input-email-help form-input-email-feedback"
        trim>
      </b-form-input>
    </div>
    </b-col>

      <b-col cols="12" md="3">
        <div role="group">
        <label class="sr-only" for="form-input-message">Message</label>
        <b-form-input
          id="form-input-message"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="message"
          placeholder="Message"
          trim>
        </b-form-input>
      </div>
      </b-col>
    </b-row>

    <b-row class="text-white text-left">
      <b-col cols="12" md="3"></b-col>
      <b-col cols="12" md="3"></b-col>
      <b-col cols="12" md="3">
        <b-button class="mt-4 w-100" variant="outline-white">SEND IT</b-button>
      </b-col>
    </b-row>
    </b-form>
  </div>

   <!-- CONTACT DETAILS -->
    <b-row class="mt-50 text-white text-left ">
      <b-col cols="12" md="3">
        <h5 class="mt-1">Billy Carpenter</h5>
        <p class="font-italic mt-1"><small>DESIGNER AND DIRECTOR</small></p>
      </b-col>
      <b-col cols="12" md="3">
        <p>Lipsom ipsum</p>
      </b-col>
      <b-col cols="12" md="1">
        <p><img class="img-mr" alt="icon" src="~@/assets/mail-icon.png" width="24px"></p>
        <p><img class="img-mr" alt="icon" src="~@/assets/phone-icon.png" width="24px"></p>
        <p><img class="img-mr" alt="icon" src="~@/assets/web-icon.png" width="24px"></p>
      </b-col>
      <b-col cols="12" md="3">
        <p class="mt-1">billy@continuus.co</p>
        <p class="mt-1">+1 (999) 111-222</p>
        <p class="mt-1">continuus.co</p>
        <p class="mt-01">continuuscompany.com</p>
      </b-col>
      <b-col class="margin-bottom" cols="12" md="12">
      </b-col>
    </b-row>
    <b-row class="verticaltext"><b-col><img left height="18px" alt="logo" src="~@/assets/footer-logo.png"><small></small><b-link class="ml-4" href="#foo" >Privacy</b-link><b-link class="ml-2" href="#foo">Terms</b-link></b-col></b-row>
  </b-container>
  </b-container>
</template>

<style>
.mt-01{margin-top:-5;}
.verticaltext {
     transform: rotate(-90deg);
     left: 58%;
     bottom: 170px;
     position: relative;
     clear:both;
 }
 .verticaltext a{
      color: #4F4F4F!important;
  }
  .margin-bottom{
    margin-bottom: 25%;
  }
  .mb-7{margin-bottom:7.5rem;}
  .mb-50{
    margin-bottom:340px;
  }

</style>
<script>
export default {
  name:"contact-form",
  data() {
    return {
      email: '',
      name: '',
      message: ''
    };
  },
  methods: {
    isValid() {
      return this.email.includes ("@"&&".") ? true : false;
    }
  },
  computed: {
      isEmailStateValid() {
      if (this.email) {
      return this.isValid(this.email);
    }
      return null;
    }
  }
  };
  </script>
