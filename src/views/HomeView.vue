<script lang="ts" setup>
import { useLocalStore } from '@/stores/local';
import { useHomeStore } from '@/stores/home';
import type { onMounted } from 'vue';

const home = useHomeStore();

const date = new Date();
let helloString = '';
if( date.getHours() >= 5 && date.getHours() < 12) {
  helloString = '¡Buenos dias!';
} else if(date.getHours() >= 12 && date.getHours() < 6) {
  helloString = '¡Buenas tardes!';
} else helloString = '¡Buenas noches!';

</script>

<template>
  <section id="welcome">
    <h1>{{ helloString }}</h1>
    <ul>
      <li v-for="item of home.welcomeItems" :key="item.title">
      {{ item.title }}
      </li>
    </ul>
  </section>
  
  <ul>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quam!</li>
    <li>Ut eligendi cupiditate itaque illo earum odit blanditiis ipsa maiores?</li>
    <li>
      Doloribus expedita aspernatur minima iusto consequuntur! Voluptatibus ullam earum fugiat!
    </li>
    <li>
      Facilis repellat incidunt dignissimos ut voluptates, provident dolorum consequuntur nam?
    </li>
    <li>Facere aut pariatur accusamus temporibus ratione ipsam, iure provident quis.</li>
    <li>Asperiores natus non sit modi vel alias a, earum quas.</li>
    <li>Porro cupiditate cumque vero praesentium enim, vel optio incidunt debitis.</li>
    <li>Aspernatur aut excepturi, dolorum ratione tempora iste corrupti repellendus natus.</li>
    <li>Amet repellat voluptatum, doloremque omnis optio tempore velit obcaecati assumenda?</li>
    <li>Nisi reprehenderit ad nulla? Hic consequuntur quam nihil doloremque esse.</li>
    <li>Quibusdam est quae quos atque. Sit iste neque necessitatibus enim?</li>
    <li>Quas, doloribus assumenda? Et, facere laboriosam nam voluptas nobis accusantium?</li>
    <li>Expedita exercitationem cupiditate ut mollitia doloremque officia modi corrupti quam!</li>
    <li>Veritatis modi nesciunt dolorem voluptate, ut ratione? Id, inventore facere.</li>
    <li>Minus odit explicabo beatae consequuntur libero quidem eum ullam dignissimos.</li>
    <li>Corrupti quo a minima animi officia, quibusdam nam architecto at?</li>
    <li>Aspernatur excepturi cum omnis adipisci possimus dolor consequatur quam doloribus.</li>
    <li>Cumque quas in consequuntur modi nihil ipsa sapiente veniam aut.</li>
    <li>Earum, molestiae quam sequi cum animi qui? Soluta, dolore temporibus!</li>
    <li>Assumenda quod qui numquam in molestias vero ipsum impedit est!</li>
    <li>Veritatis dolorum sunt et nam consequatur, odio repellendus porro sequi.</li>
    <li>Velit esse optio doloribus et aliquam magni molestiae odio rem?</li>
    <li>Debitis maxime sed voluptates nam facere ratione autem voluptatum iusto.</li>
    <li>Quo quisquam libero, sint eius laudantium dignissimos fuga perspiciatis vero?</li>
    <li>Saepe consequuntur exercitationem aperiam omnis nihil at quaerat optio iure.</li>
    <li>Hic placeat nulla eius vitae consectetur dolorem ducimus amet saepe?</li>
    <li>
      Dignissimos veritatis in enim molestiae corporis deleniti magnam. Molestiae, recusandae.
    </li>
    <li>
      Voluptatibus necessitatibus consequuntur, doloremque atque excepturi impedit voluptatum facere
      temporibus.
    </li>
  </ul>
</template>

<style scoped></style>
