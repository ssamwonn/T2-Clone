import React, { Component } from "react";
import MainBanner from "./Components/MainBanner";
import Module from "./Components/Module";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      featured: 0,
      shopthelook: 0,
      curatedForYou: 0,
      partnership: 0,
      teaLibrary: 0,
      discover: 0,
      findYourGift: 0,
      main: [],
      moduleList: [],
      firstItemWidthList: [1140, 500, 50],
      lastItemWidthList: [700, 700, 700],
      firstcount: 0,
      lastcount: 0,
      listImg:[],
      moduleList: [
        {
          moduleID: "featured",
          moduleStyle: "crouselModule",
          moduleName: "Featured",
          moduleAside: "",
          AsideDESC: "",
          moduleItemList: [
            {
              id: "item1",
              itemBoxStyle: "matchaBox",
              itemName: "Matcha",
              imageType: "img",
              itemImage: "Images/Main/item_1.jpg",
              itemDESC:
                "Curl up on the couch with a creamy, frothy and deliciously indulgent Matcha latte. Get the energy hit without the caffeine jitters – Matcha delivers a slower release of energy thanks to caffeine and L-theanine",
              buttonList: ["Shop now"],
            },
            {
              id: "item2",
              itemBoxStyle: "matchaFlaskBox",
              itemName: "Matcha Flask",
              imageType: "video",
              itemImage: "Images/Main/A_item2.mp4",
              itemDESC:
                "Green goodness on the go with our Matcha Flask Featuring a hidden stainless-steel whisk to help make your Matcha quick smart. Just add T2 Matcha, water, milk and shake.",
              buttonList: ["Shop now"],
            },
            {
              id: "item3",
              itemBoxStyle: "moroccan",
              itemName: "Moroccan Tealeidscope",
              imageType: "img",
              itemImage: "Images/Main/item_3.webp",
              itemDESC:
                "What happens when two icons collide? Teatime goes up a notch. Our famous Stainless Steel flask unites with quintessentially T2 Moroccan Tealeidoscope print.",
              buttonList: ["Shop now"],
            },
            {
              id: "item4",
              itemBoxStyle: "subscription",
              itemName: "Subscription",
              imageType: "img",
              itemImage: "Images/Main/item_4.webp",
              itemDESC:"Explore the finer tea in life – our new subscription box is filled with unknown flavours, but soon to be new favourites.",
              buttonList: ["Shop now"],
            },
            {
              id: "item5",
              itemBoxStyle: "drinking",
              itemName: "Responsible Drinking. Your favourite tea is now B Corp certified",
              imageType: "img",
              itemImage: "Images/Main/item_3.webp",
              itemDESC:
                "What happens when two icons collide? Teatime goes up a notch. Our famous Stainless Steel flask unites with quintessentially T2 Moroccan Tealeidoscope print.",
              buttonList: ["Shop now"],
            },
          ],
        },
        {
          moduleID: "shopthelook",
          moduleStyle: "bookdeskModule",
          moduleName: "Shop the look",
          moduleAside: "Bonnie and Neil",
          AsideDESC: "",
          moduleItemList: [
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/B_item1.png",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
            {
              id: "item2",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/B_item2.png",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
            {
              id: "item3",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/B_item3.png",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
            {
              id: "item4",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/B_item4.png",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
          ],
        },
        {
          moduleID: "curatedForYou",
          moduleStyle: "showWindowModule",
          moduleName: "Curated for you",
          moduleAside: "",
          AsideDESC: "",
          moduleItemList: [
            {
              id: "item1",
              itemBoxStyle: "biggerItemBox",
              itemName: "Tea",
              imageType: "img",
              itemImage: "Images/Main/C_item1.png",
              itemDESC: "",
              buttonList: ["Add to bag"],
            },
            {
              id: "item1",
              itemBoxStyle: "biggerItemBox",
              itemName: "Tea",
              imageType: "img",
              itemImage: "Images/Main/C_item2.png",
              itemDESC: "",
              buttonList: ["Add to bag"],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Tea",
              imageType: "img",
              itemImage: "Images/Main/C_item3.png",
              itemDESC: "",
              buttonList: [],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Tea",
              imageType: "img",
              itemImage: "Images/Main/C_item4.png",
              itemDESC: "",
              buttonList: [],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Tea",
              imageType: "img",
              itemImage: "Images/Main/C_item5.png",
              itemDESC: "",
              buttonList: [],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Tea",
              imageType: "img",
              itemImage: "Images/Main/C_item6.png",
              itemDESC: "",
              buttonList: [],
            },
          ],
        },
        {
          moduleID: "partnership",
          moduleStyle: "galleryModule",
          moduleName: "PartnerShips",
          moduleAside: "T2 Collaborations",
          asideDESC:
            "Our mission is to celebrate difference to make a difference. Discover our latest collaborations with Goanna Hut and The Smith Family.",
          moduleItemList: [
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Goanna Hut",
              imageType: "img",
              itemImage: "Images/Main/D_item1.webp",
              itemDESC:
                "Delicious teas celebrating native Australian ingredients and superfoods!",
              buttonList: ["Find out more"],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "The Smith family",
              imageType: "img",
              itemImage: "Images/Main/D_item2.webp",
              itemDESC:
                "Helping Australian children in need to create better futures for themselves.",
              buttonList: ["Find out more"],
            },
          ],
        },
        {
          moduleID: "teaLibrary",
          moduleStyle: "fadeModule",
          moduleName: "Tea Library",
          moduleAside: "",
          AsideDESC: "",
          moduleItemList: [
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Black Teas",
              imageType: "img",
              itemImage: "Images/Main/E_item1.webp",
              itemDESC:
                "Black tea devotees look no further for everything from light and bright infusions to breakfast blends and every kind of flavour in between.",
              buttonList: ["Shop", "Shop all teas"],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea 123For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/item_1.jpg",
              itemDESC: "A$70.12300",
              buttonList: ["Add to bag"],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/item_1.jpg",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/item_1.jpg",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
          ],
        },
        {
          moduleID: "",
          moduleStyle: "jigModule",
          moduleName: "",
          moduleAside: "",
          AsideDESC: "",
          moduleItemList: [
            {
              id: "item1",
              itemBoxStyle: "leftStruckBox",
              itemName: "Teawears",
              imageType: "img",
              itemImage: "Images/Main/H_item1.jpg",
              itemDESC:
                "Your tea is not complete without one of our beautiful teasets!",
              buttonList: ["Add to bag"],
            },
            {
              id: "item1",
              itemBoxStyle: "rightStruckBox",
              itemName: "Brewing Tools",
              imageType: "img",
              itemImage: "Images/Main/H_item2.jpg",
              itemDESC:
                "These handy gadgets and contraptions are pick of the bunch – there’s everything you need to get brewing!",
              buttonList: ["Add to bag"],
            },
          ],
        },
        {
          moduleID: "discover",
          moduleStyle: "galleryModule",
          moduleName: "Shop the look",
          moduleAside: "A flavour for you",
          asideDESC:
            "It's tea with a twist. Discover tips and tricks to perfect your fave brew or explore our tea-infused recipes.",
          moduleItemList: [
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Matcha Cacao Bliss Balls",
              imageType: "img",
              itemImage: "Images/Main/F_item1.webp",
              itemDESC:
                "Mix up a batch of these tasty Matcha cacao bliss balls, and you’re all set for snack time!",
              buttonList: ["Add to bag"],
            },
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Matcha Affogato",
              imageType: "img",
              itemImage: "Images/Main/F_item2.webp",
              itemDESC:
                "This super satisfying dessert takes seconds to prepare and makes for the perfect summer treat!",
              buttonList: ["Add to bag"],
            },
          ],
        },
        {
          moduleID: "findYourGift",
          moduleStyle: "crouselGalleryModule",
          moduleName: "",
          moduleAside: "Find Your Gift",
          asideDESC:
            "We’ve curated a list of gifts to fit the needs of those you’re buying a gift for.",
          moduleItemList: [
            {
              id: "item1",
              itemBoxStyle: "",
              itemName: "Tea Gift Pack",
              imageType: "img",
              itemImage: "Images/Main/G_item1.jpg",
              itemDESC:
                "Make an impression with our top selling tea and teaware gift packs.",
              buttonList: ["Add to bag"],
            },
            {
              id: "item2",
              itemBoxStyle: "",
              itemName: "Tea Packs",
              imageType: "img",
              itemImage: "Images/Main/G_item2.jpg",
              itemDESC:
                "Delight and devour with our tasty teatime treats, bundled up and dressed to the nines in our tea packs.",
              buttonList: ["Add to bag"],
            },
            {
              id: "item3",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/G_item3.jpg",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
            {
              id: "item4",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/G_item4.jpg",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
            {
              id: "item4",
              itemBoxStyle: "",
              itemName: "Bonnie and Neil Tea For One Pink Orchid",
              imageType: "img",
              itemImage: "Images/Main/G_item4.jpg",
              itemDESC: "A$70.00",
              buttonList: ["Add to bag"],
            },
          ],
        },
      ],
    };
  }

   click = (button, module) => {
    const {
      firstcount,
      lastcount,
      firstItemWidthList,
      lastItemWidthList,
    } = this.state;
    if (module === "featured") {
      if (button === 2 && firstcount < firstItemWidthList.length) {
        this.setState({
          [module]: this.state[module] - firstItemWidthList[firstcount],
          firstcount: firstcount + 1,
        });
      }
      if (button === 1 && firstcount > 0) {
        this.setState({
          [module]: this.state[module] + firstItemWidthList[firstcount - 1],
          firstcount: firstcount - 1,
        });
      }
    } else {
      if (button === 2 && lastcount < lastItemWidthList.length) {
        this.setState({
          [module]: this.state[module] - lastItemWidthList[lastcount],
          lastcount: lastcount + 1,
        });
      }
      if (button === 1 && lastcount > 0) {
        this.setState({
          [module]: this.state[module] + lastItemWidthList[lastcount - 1],
          lastcount: lastcount - 1,
        });
      }
    }
  };

  render() {
    return (
      <main>
        <MainBanner />
        <div className="moduleList">
          {this.state.moduleList.map((el, index) => {
            return (
              <Module
                imgList= {this.state.listImg[index]}
                key={index}
                click={this.click}
                transform={this.state[el.moduleID]}
                moduleID={el.moduleID}
                moduleStyle={el.moduleStyle}
                moduleName={el.moduleName}
                moduleAside={el.moduleAside}
                asideDESC={el.asideDESC}
                moduleItemList={el.moduleItemList}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default Main;
