<template>
    <div class="hero-body">
		<div class="container has-text-left">
			<h3 class="title is-5">
				Featured Works
			</h3>

			<div class="tag-list featuredposts__list" :class="isLoading ? 'loading-skeleton' : ''">
				<InfiniteLoopSlider
                        :reverse="i % 2"
                        :duration="random(sliderDuration - 5000, sliderDuration + 5000)"
                        :items_per_row="showAllWorks ? works.length/3 : 5"
                        :items="works"
                        v-for="(_, i) in new Array(showAllWorks ? 3 : 1)"
                        :key="i" />
                        
			</div>
			
			<p class="featuredposts__footer" v-if="!showAllWorks && !isLoading">
				<a @click="showAllWorks=true" class="featuredposts__see-all">
					See All Works
				</a>
			</p>
		</div>
	</div>
</template>

<script>
    import WorksService from '@/services/WorksService.js'
    import InfiniteLoopSlider from '../components/InfiniteLoopSlider.vue'

    export default {
        props: ['showAll'],
        data () {
            return {
                works: [],
				showAllWorks: this.showAll || false,
                isLoading: true,
                sliderDuration: 15000,
            }
        },
        components: {
            InfiniteLoopSlider
        },
        async created() {
            this.loadWorks();
            this.fetchPortfolio();
            this.startAnimation();

        },
        methods: {
            startAnimation: function () {
                [...document.querySelectorAll('.animated-column')].map(column => {
                    column.innerHTML = column.innerHTML + column.innerHTML;
                });
            },

            loadWorks: function () {
                for (var i = 0; i < 7; i++) {
                    this.works.push({
                        isPinned: true,
                        title: '...'
                    });
                }
            },

            fetchPortfolio: async function () {
                const worksService = new WorksService();

                this.works = await worksService.getAllPages()
                this.isLoading = false;
            },

            random: (min, max) => Math.floor(Math.random() * (max - min)) + min,

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
    .featuredposts__see-all {
        background-image: linear-gradient(180deg,#bfff39,#a8ff35 70%);
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
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        gap: 1rem 0;
        position: relative;
        padding: 1.5rem 0;
        overflow: hidden;
    }



    .featuredpost__inner {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        border-radius: 0;
        color: #060602;
        padding: 1rem;
    }

    .featuredpost:focus-within .featuredpost__inner,
    .featuredpost:hover .featuredpost__inner {
        background-image: linear-gradient(0deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.4) 100%);
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