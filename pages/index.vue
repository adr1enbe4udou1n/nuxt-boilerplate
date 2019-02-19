<template>
  <div>
    <b-carousel
      id="carousel1"
      v-model="slide"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!--
        Note the classes .d-block and .img-fluid to prevent browser default image alignment
      -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <div class="row marketing">
      <h4>HTML5 Boilerplate</h4>
      <p>
        HTML5 Boilerplate is a professional front-end template for building
        fast, robust, and adaptable web apps or sites.
      </p>

      <h4>Sass</h4>
      <p>
        Sass is the most mature, stable, and powerful professional grade CSS
        extension language in the world.
      </p>

      <h4>Bootstrap</h4>
      <p>
        Sleek, intuitive, and powerful mobile first front-end framework for
        faster and easier web development.
      </p>

      <b-btn class="mr-1" @click="openSwal">Sweet !</b-btn>
      <b-btn
        class="mr-1"
        variant="success"
        @click="showNotification('success')"
      >
        Notify !
      </b-btn>
      <b-btn class="mr-1" variant="info" @click="showNotification()">
        Notify !
      </b-btn>
      <b-btn class="mr-1" variant="warning" @click="showNotification('warn')">
        Notify !
      </b-btn>
      <b-btn class="mr-1" variant="danger" @click="showNotification('error')">
        Notify !
      </b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    openSwal() {
      this.$swal.fire({
        title: 'Yo!',
        text: 'Yeaaah!',
        type: 'success',
        confirmButtonText: 'Cool'
      })
    },
    showNotification(type = 'info') {
      this.$notify({
        group: 'main',
        title: 'Important message',
        text: 'Hello user! This is a notification!',
        type
      })
    }
  }
}
</script>
