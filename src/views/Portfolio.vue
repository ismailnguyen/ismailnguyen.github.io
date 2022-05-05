<template>
    <div class="hero-body">
		<div class="container has-text-left">
			<h3 class="title is-5">
				Featured Works
			</h3>
                    
			<ul class="featuredposts__list" :class="isLoading ? 'loading-skeleton' : ''">
				<li 
                    class="featuredposts__item" v-for="(work, index) in displayedWorks"
                    :key="index"
                    :title="work.title">
					<div class="featuredpost" :style="work.coverImage ? 'background-image: url(' +work.coverImage.url+ ')' : ''">
						<div class="featuredpost__inner">
							<div class="media">
								<div class="media-left" v-if="work.logo">
									<span class="icon is-large"><img :src="work.logo.url" :alt="work.title"></span>
								</div>
								<div class="media-content">
									<a :href="'work/' + encodeURIComponent(work.id)" class="featuredpost__link">
										<span class="featuredpost__title">{{ work.title }}</span>
									</a>
								</div>
							</div>
						
							<p class="featuredpost__description" v-if="work.subTitle">{{ work.subTitle }}</p>
						</div>
					</div>
				</li>
			</ul>
			
			<p class="featuredposts__footer" v-if="!showAllWorks">
				<a @click="showAllWorks=true" class="featuredposts__see-all">
					<span class="has-text-background">See All Works</span>
				</a>
			</p>
		</div>
	</div>
</template>

<script>
    import NotionService from '@/services/NotionService.js'

    export default {
        props: ['showAll'],
        data () {
            return {
                works: [],
				showAllWorks: this.showAll || false,
                isLoading: true
            }
        },
        async created() {
            this.loadWorks();
            this.fetchPortfolio();
        },
        methods: {
            loadWorks: function () {
                for (var i = 0; i < 7; i++) {
                    this.works.push({
                        isPinned: true,
                        title: '...'
                    });
                }
            },

            fetchPortfolio: async function () {
                const notionService = new NotionService();

                this.works = await notionService.getAllPages()
                this.isLoading = false;
            }
        },
		computed: {
			displayedWorks: function () {
				if (this.showAllWorks)
					return this.works;

				return this.works ? this.works.filter(work => work.isPinned) : [];
			}
		}
    }
</script>

<style scoped lang="scss">

.has-text-background {
   background-image: linear-gradient(120deg, #fff,#fff 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: 0 70%;
    transition: background-size 0.25s ease-in;
    
    &:hover {
        background-size: 100% 88% !important; 
    }
}

.media-left .icon {
    vertical-align: bottom;
    border-radius: 50px;
    background: #f8faff;
    padding: 4px;
}

.featuredposts__list {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(245px,1fr));
    grid-gap: 3rem;
}

.featuredposts__item {
    padding: 0;
    max-width: none;
	display: block;
}

.featuredposts__item:hover .featuredpost {
  transform: scale(1.05) translateZ(0);
}

.featuredpost {
    display: block;
    height: 300px;
    position: relative;
    border-radius: .5rem;
    overflow: hidden;
    transform-origin: center;
    transform: scale(1) translateZ(0);
    transition: 
        filter 200ms linear,
        transform 200ms linear;
    background-size: cover;
    background-position: center;
    background-color: var(--color-bg-offset);
    box-shadow: 0 2px 1px rgba(0,0,0,0.09), 
              0 4px 2px rgba(0,0,0,0.09), 
              0 8px 4px rgba(0,0,0,0.09), 
              0 16px 8px rgba(0,0,0,0.09),
              0 32px 16px rgba(0,0,0,0.09);
  }

.featuredpost__inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    border-radius: .5rem;
    color: #fff;
    padding: 1rem;
    background-image: linear-gradient(0deg,rgba(0,0,0,0) 0,rgba(0,0,0,.15) 50%,rgba(0,0,0,.4) 100%);
}

.featuredpost:focus-within .featuredpost__inner,
.featuredpost:hover .featuredpost__inner {
    background-image: linear-gradient(0deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.4) 100%);
}

.featuredpost__link {
    overflow-wrap: break-word;
    hyphens: auto;
    display: block;
    color: inherit!important;
}

.featuredpost__link::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

a {
	color: #f582ae !important;
    text-decoration: none;
}

.featuredpost__title {
    display: block;
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 1.4;
    margin-bottom: .5rem;
    text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
}

.featuredpost__description {
    pointer-events: none;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1);
}

.featuredpost:hover .featuredpost__description, .featuredpost__link:focus+.featuredpost__description {
    transform: translateY(0);
    opacity: 1;
}

.featuredposts__footer {
    text-align: right;
}

.featuredposts__see-all {
    font-size: 1.25rem;
    font-weight: 700;
    align-items: center;
}

%loading-skeleton {
  color: transparent;
  appearance: none;
  -webkit-appearance: none;
  background-color: #eee;
  border-color: #eee;

  &::placeholder {
    color: transparent;
  }
}
.loading-skeleton {
  pointer-events: none;
  animation: loading-skeleton 1s infinite alternate;
  
  li .featuredpost,
  .featuredpost__title {
    @extend %loading-skeleton;
  }
}

@keyframes loading-skeleton {
  from {
    opacity: .4;
  }
  to {
    opacity: 1;
  }
}
</style>