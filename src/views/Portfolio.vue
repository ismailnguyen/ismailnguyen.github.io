<template>


        <div class="box">
            <a class="card" @click="openWorkDetail(work)" href="" v-for="(work, index) in works.slice(6, works.length)" :key="index" :style="work.coverImage ? 'background: url('+work.coverImage.url+') center/cover no-repeat;': ''">
            </a>
        </div>


<!-- 
  <div class="columns is-mobile is-multiline is-centered">

    
    <div class="column is-one-third-desktop is-half-tablet is-full-mobile" v-for="(work, index) in works" :key="index">
      <div class="card" :style="work.coverImage ? 'background: url('+work.coverImage.url+') center/cover no-repeat;': ''" @click="openWorkDetail(work)">
  
      <div class="content">
        <div class="title">
          {{work.title}}
        </div>
        <div class="text">
          {{work.subtitle}}
        </div>
      </div>
      <div class="sinopse">
        <div class="content-sinopse">          
          <div class="title">{{ work.title }}</div>
          <div class="text">
            {{ work.description }}
          </div>
        </div>
        <div class="view series_lacasa">See more</div>
      </div>
    </div>
        </div>
    </div> -->
</template>

<script>
    import data from '../data.js'

    export default {
        data () {
            return {
                currentImage: data[0].coverImage.url,
                works: data
            }
        },
        methods: {
            openWorkDetail: function (work) {
                this.$router.push({ name: 'WorkDetail', params: { title: work.title } })
            },
          
        }
    }
</script>

<style scoped lang="scss">
.box {
  display: grid;
  grid-gap: 20px;
  background: linear-gradient(to bottom right, #f9fafb, #dfe4eb);
  grid-template-columns: repeat(6, minmax(100px, 1fr));
}

.box .card {
  transition: transform .3s;  
}

.box .card:hover {
  transition: transform .3s;
  transform: scale(1.4);
}

.box .card {
  border-radius: 2px;
  height: 120px;
  box-shadow: 8px 8px 20px 0 rgba(106,53,255,.32);
}

@media(max-width: 900px) {
  .box {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

}

@media(max-width: 700px) {
  .box {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
}

@media(max-width: 500px) {
  .box {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;    
  }

  .box .card:hover {
    transition: transform .3s;
    transform: scale(1.2);
  }
}

@import url(https://fonts.googleapis.com/css?family=Lato:300);

    .columns {
        text-align: center;
        width: 5000px;
        transform: translateY(-50%) translateX(-50%);
    }

    .hero-foot {
        padding-left: 20px;
        padding-right: 20px;
    }

    h3.title {
        color: white !important;
    }

    .card {
      overflow:hidden;
      width: 200px;
      height:100px;
      background:#fff;
      box-shadow:1px 22px 44px rgba(0,0,0,.19);
      transition:0.6s;
      border-radius:2px;
      position:relative;
      &:hover {
        transform:translateY(-15px);
        box-shadow:1px 12px 34px rgba(0,0,0,.31);
        .sinopse{
          opacity:1;
          transition-delay:0.4s;
          .view{
            opacity:1;
            transform:translateY(0%);
            transition:0.6s;
            transition-delay:1s;
          }
          .content-sinopse {
            .text{
              transform:translateY(0);
              transition-delay:0.6s;
            }
            .title {
              transform:translateY(0);
              transition-delay:0.2s;
            }
          }
        }
        .date{
          transform:translateY(-100%);
          opacity:0;
        }
        .content{
            transform:translateY(100%);
            opacity:0;
        }
      }
      .date{
        position:absolute;
        top:25px;
        right:25px;
        color:#fff;
        font-weight:300;
        font-size:14px;
        transition:0.8s;
        .tv_ico {
          img {
            width:12px;
            vertical-align:baseline;
            margin-left:6px;
          }
        }
      }
      .content{
        transition:0.8s;
        display:flex;
        flex-wrap:wrap;
        align-self:flex-end;
        padding:25px 25px 50px 25px;
        .title{
          width:100%;
          color:#fff;
          font-size:44px;
          font-weight:700;
          line-height:50px;
          margin-bottom:12px;
        }
        .text{
          width:100%;
          color:#fff;
          font-size:16px;
          font-weight:300;
        }
      }
      .sinopse {
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        padding:25px 25px 50px 25px;
        background:rgba(0,0,0,.78);
        color:#fff;
        font-weight:300;
        opacity:0;
        transition:0.8s;
        display:flex;
        align-items:flex-end;
        flex-wrap:wrap;
        iframe {
          position: absolute;
          top: 0;
          width: 100%;
          margin-left: -30px;
          height: 260px;
        }
        .view {
          position:absolute;
          bottom:15px;
          right:25px;
          color:#fff;
          font-size:14px;
          border-bottom:1px solid #fff;
          opacity:0;
          transform:translateY(100%);
          transition:0.6s;
          cursor:pointer;
        }
        .content-sinopse{
          .title{
            color:rgba(255,255,255,.6);
            font-size:22px;
            font-weight:700;
            margin-bottom:12px;
            transform:translateY(-100%);
            transition:0.6s;
          }
          .text{
            transform:translateY(100%);
            transition:0.6s;
            color:rgba(255,255,255,.6);
            font-weight:300;
            font-size:14px;
          }
        }
      }
}
    .is-fixed {
        position: fixed;
    }
    
    .is-cover {
        width: 35%;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .media {
        align-items: center;

        &-left .icon {
            vertical-align: bottom;
            border-radius: 50px;
            background: #f8faff;
            padding: 4px;
        }

        &-content {
            overflow: hidden;
        }
    }

    .has-background-dark {
        .work-item {
            background-color: rgb(41, 43, 51);
            box-shadow: 0 3rem 3rem -1.25rem rgba(10, 10, 10, .1);

            &:hover {
                box-shadow: 8px 8px 20px 0 rgba(106, 53, 255, 0.32);
            }
            
            .title {
                color: rgb(149, 156, 177);
            }
        }
    }
    
    .card-image {
        display: block;
        background-size: cover !important;
        width: 100%;
        position: absolute;
        height: 235px;
        transition: 0.2s all ease-out;
        background-position: center;
        background-repeat: no-repeat;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        top: 0;
    }

    .work-item {
        min-height: 26em;
        margin: auto;
        background-color: #f8faff;
        border-radius: 6px;
        box-shadow: 8px 8px 20px 0 rgba(106, 53, 255, 0.32);
        display: block;
        margin-bottom: 1.5rem;
        transition-duration: 86ms;
        transition-property: box-shadow, transform;
        will-change: box-shadow, transform;
        
        &:hover {
            transition: all 0.3s ease-out;
            box-shadow: 0 3rem 3rem -1.25rem rgba(10, 10, 10, .1);
        }
    }

    .work-item:hover .card-image {
        height: 100%;
        filter: blur(3px);
    }

    .work-item:hover .image {
        display: none;
    }

    .work-item:hover .button-view-details {
        display: block !important;
        position: relative;
    }

    .button-view-details {
        border: none;
        border-radius: 5px;
        color: #f8faff;
        font-weight: bold;
        background: #6b65a7;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.26);
        transition: .3s cubic-bezier(.175,.885,.32,1.275);
    }

    .button-view-details:hover:before {
        transform: translate(3px,-3px);
    }

    .button-view-details:before {
        content: "";
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 0;
        transition: .3s cubic-bezier(.175,.885,.32,1.275);
        border-radius: 5px;
        background-color: rgba(138,61,245,.2);
    }

    .button-view-details:hover {
        transform: translate(-2px,2px);
    }

    .work-item .media {
        padding-top: 25px;
    }

     button {
        border-radius: 0;
        color: #f8faff;
        background-color: #6b65a7;
        transition: box-shadow 300ms ease, background-color 300ms ease;
    }

    button:hover {
        background-color: #6b65a7;
        color: #f8faff;
        box-shadow: 8px 8px 20px 0 rgba(106, 53, 255, 0.32);
    }

    .card-footer {
        border: none;
    }

    // .portfolio {
    //   animation-duration: 500ms;
    //   animation-name: slideUp;
    //   animation-fill-mode: both;
    //   animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1.5);
    // }

    // @for $i from 1 through 50 {
    //   .portfolio:nth-child(#{$i}n) {
    //       animation-delay: #{($i/3 + 3)}s;
    //   }
    // }
</style>