import { LoremIpsum } from 'lorem-ipsum';
import infraredDreamers1 from './../../../assets/Collections-images/Infrared-Dreamers/infrared-dreamers1.jpg';
import infraredDreamers2 from './../../../assets/Collections-images/Infrared-Dreamers/infrared-dreamers2.jpg';
import infraredDreamers3 from './../../../assets/Collections-images/Infrared-Dreamers/infrared-dreamers3.jpg';
import infraredDreamers4 from './../../../assets/Collections-images/Infrared-Dreamers/infrared-dreamers4.jpg';

import outOfTheInfraredBlur1 from './../../../assets/Collections-images/Out-of-the-infrared-blur/out-of-the-infrared-blur1.jpg'
import outOfTheInfraredBlur2 from './../../../assets/Collections-images/Out-of-the-infrared-blur/out-of-the-infrared-blur2.jpg'
import outOfTheInfraredBlur3 from './../../../assets/Collections-images/Out-of-the-infrared-blur/out-of-the-infrared-blur3.jpg'
import outOfTheInfraredBlur4 from './../../../assets/Collections-images/Out-of-the-infrared-blur/out-of-the-infrared-blur4.jpg'

import stayinOrange1 from './../../../assets/Collections-images/Stayin-Orange/stayin-orange1.jpg'
import stayinOrange2 from './../../../assets/Collections-images/Stayin-Orange/stayin-orange2.jpg'
import stayinOrange3 from './../../../assets/Collections-images/Stayin-Orange/stayin-orange3.jpg'
import stayinOrange4 from './../../../assets/Collections-images/Stayin-Orange/stayin-orange4.jpg'

import theGetAway1 from './../../../assets/Collections-images/The-Getaway/the-getaway1.jpg'
import theGetAway2 from './../../../assets/Collections-images/The-Getaway/the-getaway2.jpg'
import theGetAway3 from './../../../assets/Collections-images/The-Getaway/the-getaway3.jpg'
import theGetAway4 from './../../../assets/Collections-images/The-Getaway/the-getaway4.jpg'

import transmissionLines1 from './../../../assets/Collections-images/Transmission-Lines/transmission-lines1.jpg'
import transmissionLines2 from './../../../assets/Collections-images/Transmission-Lines/transmission-lines2.jpg'
import transmissionLines3 from './../../../assets/Collections-images/Transmission-Lines/transmission-lines3.jpg'
import transmissionLines4 from './../../../assets/Collections-images/Transmission-Lines/transmission-lines4.jpg'
//lorem ipsum kütüphanesi kullanarak random kelimeler üretildi
const lorem = new LoremIpsum({//lorem ipsum obejsi tanımı
  sentencesPerParagraph: {
      max: 2,
      min: 1
  },
});


 export const collectionsData = [
    {
      collectionGroupName: "Infrared Dreamers",
      collectionImages: [infraredDreamers1, infraredDreamers2, infraredDreamers3, infraredDreamers4],
      collectionDetailTitle:[lorem.generateWords(4),lorem.generateWords(4),lorem.generateWords(4),lorem.generateWords(2)],
      collectionDetailContent: "The image belongs to the collection group.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, enim? Provident, laudantium eum. Voluptates rem atque in, sint dolor eligendi delectus amet. Est a ipsam vel explicabo tempora sed omnis quae error qui soluta atque veniam impedit exercitationem, labore nihil ullam laboriosam harum dicta numquam odio dolorum inventore libero neque deserunt. Velit, cumque! Quas sequi facere ducimus.",
    },
    {
      collectionGroupName: "Out of the infrared blur",
      collectionImages: [outOfTheInfraredBlur1, outOfTheInfraredBlur2, outOfTheInfraredBlur3, outOfTheInfraredBlur4],
      collectionDetailTitle:[lorem.generateWords(2),lorem.generateWords(2),lorem.generateWords(2),lorem.generateWords(2)],
      collectionDetailContent: "The image belongs to the collection group.Debitis incidunt, minus iste perferendis ratione distinctio. Sapiente possimus nobis sit hic ullam. Provident, soluta magnam natus veniam temporibus minima tempora odit vero sequi saepe amet! Eaque ex ullam quis totam deleniti obcaecati dolor impedit tempore."
    },
    {
      collectionGroupName: "Stayin’ Orange",
      collectionImages: [stayinOrange1, stayinOrange2, stayinOrange3, stayinOrange4],
      collectionDetailTitle:[lorem.generateWords(2),lorem.generateWords(2),lorem.generateWords(2),lorem.generateWords(2)],
      collectionDetailContent: "The image belongs to the collection group.Perspiciatis ab mollitia consequatur fugiat, impedit pariatur voluptates laborum omnis saepe nihil ut voluptatibus incidunt est, architecto molestias! Dolorum aliquam repudiandae, quasi alias porro ab natus culpa enim dignissimos obcaecati! Sequi accusantium, modi alias est quibusdam tempora nesciunt vitae quaerat accusamus numquam, inventore aliquam a facere enim sed. Quos.",
    },
    {
      collectionGroupName: "The Getaway",
      collectionImages: [theGetAway1, theGetAway2, theGetAway3, theGetAway4],
      collectionDetailTitle:[lorem.generateWords(2),lorem.generateWords(2),lorem.generateWords(2),lorem.generateWords(2)],
      collectionDetailContent: "The image belongs to the collection group.Incidunt ipsa non, laboriosam id reprehenderit pariatur ipsum, ex ad voluptate sequi quam doloribus? Veritatis quibusdam nesciunt in modi saepe perspiciatis labore tempora nemo cum quisquam pariatur atque, expedita, totam exercitationem culpa facilis ipsa rem illum temporibus. Dolore reiciendis ducimus tempore vitae expedita delectus eligendi hic repellat porro",
    },
    {
      collectionGroupName: "Transmission Lines",
      collectionImages: [transmissionLines1, transmissionLines2, transmissionLines3, transmissionLines4],
      collectionDetailTitle:[lorem.generateWords(2),lorem.generateWords(2),lorem.generateWords(2),lorem.generateWords(2)],
      collectionDetailContent: "The image belongs to the collection group.Explicabo ab commodi, officia quisquam accusamus debitis ut reprehenderit molestias voluptatem corporis repudiandae architecto perferendis amet magni placeat vero impedit possimus repellat fuga. Illo officiis iure fuga soluta laborum assumenda eaque ab quis explicabo atque totam itaque rem ad, delectus accusantium, sunt vero minima, error. ",
    },
  ];

