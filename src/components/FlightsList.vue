<script setup lang="ts"></script>
<template>
  <div
    class="bg-light p-block-16 p-inline-16 box-shadow-md border-radius-25"
    role="listitem"
  >
    <div class="col-times gap-10">
      <div class="col-left gap-10">
        <div class="flex-row gap-10">
          <div aria-label="BHX 8:10AM - AGA 4:05PM">
            <p class="text-gray font-size-12">BHX</p>
            <time class="text-bold font-size-16" datetime="PT08H00M"
              >08:00h</time
            >
          </div>
          <span class="connector mt-16">---</span>
          <div aria-label="BHX 8:10AM - AGA 4:05PM">
            <p class="text-gray font-size-12">AGA</p>

            <time class="text-bold font-size-16" datetime="PT06H55M"
              >06:55h</time
            >
          </div>
        </div>
        <hr />
        <div class="flex-row gap-13">
          <div aria-label="Duration 09:45">
            <p class="text-gray font-size-12">Duration</p>
            <p class="text-bold font-size-16">09:45</p>
          </div>
          <div aria-label="Duration 09:45">
            <p class="text-gray font-size-12">Connection</p>
            <p class="text-bold font-size-16">Nonstop</p>
          </div>
        </div>
      </div>
      <div class="align-right">
        <p class="text-gray font-size-12">Flight from</p>
        <p class="text-bold font-size-16 text-green">147,99</p>
      </div>
    </div>
  </div>
</template>
