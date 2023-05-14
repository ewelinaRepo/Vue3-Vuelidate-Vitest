<template>
 <form class="form" @submit.prevent="submitForm">
    <div class="form-first-name">
      <p>First Name</p>
      <input
        id="firstName"
        v-model="form.firstName"
        type="text"
        @input="$v.firstName.$touch"
      />
      <div
        v-for="error of $v.firstName.$errors"
        :key="error.$uid"
        class="input-first-name-errors"
      >
        <div v-if="$v.firstName.$errors" class="first-name-error-msg">
          {{ error.$message }}
        </div>
      </div>
    </div>
    <div class="form-last-name">
      <p>Last Name</p>
      <input
        id="lastName"
        v-model="form.lastName"
        type="text"
        @input="$v.lastName.$touch"
      />
      <div
        v-for="error of $v.lastName.$errors"
        :key="error.$uid"
        class="input-errors"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    <div class="form-phone">
      <p>Phone Number</p>
      <input
        id="phone"
        v-model="form.phone"
        type="tel"
        @input="$v.phone.$touch"
      />
      <div
        v-for="error of $v.phone.$errors"
        :key="error.$uid"
        class="input-errors"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    <div class="form-email">
      <p>Email</p>
      <input
        id="email"
        v-model="form.email"
        type="email"
        @input="$v.email.$touch"
      />
      <div
        v-for="error of $v.email.$errors"
        :key="error.$uid"
        class="input-errors"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, maxLength, numeric } from "@vuelidate/validators";

const form = reactive({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
});

const rules = reactive({
  firstName: { required, maxLength: maxLength(20) },
  lastName: { required, maxLength: maxLength(20) },
  phone: { required, numeric },
  email: { required, email },
});

const $v = useVuelidate(rules, form);

function submitForm() {
  $v.value.$validate();
}
</script>

<style lang="css">
.root {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  padding: 5px 0;
  margin: 10px 0 5px 0;
  width: 100%;
}

button {
  background-color: #3498db;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  color: white;
}
</style>