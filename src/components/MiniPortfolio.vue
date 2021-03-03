<template>
    <div class="hero-body">
		<div class="container has-text-left">
			<h3 class="title is-5">
				Featured Works
			</h3>
			
			<ul class="featuredposts__list">
				<li class="featuredposts__item" v-for="(work, index) in displayedWorks" :key="index">
					<div class="featuredpost" style="background-color: #232831;">
						<figure v-if="work.coverImage" class="image is-1by1">
							<img :src="work.coverImage.url" alt="" class="featuredpost__image" loading="lazy">
						</figure>
						<div class="featuredpost__inner">
							<div class="media">
								<div class="media-left">
									<span class="icon is-large"><img :src="work.logo.url" :alt="work.title"></span>
								</div>
								<div class="media-content">
									<a :href="'work/' + encodeURIComponent(work.title)" class="featuredpost__link">
										<span class="featuredpost__title">{{ work.title }}</span>
									</a>
								</div>
							</div>
						
							<p class="featuredpost__description">{{ work.description }}</p>
						</div>
					</div>
				</li>
			</ul>
			
			<p class="featuredposts__footer" v-if="!showAllWorks">
				<a @click="showAllWorks=true" class="featuredposts__see-all">
					See All Works
				</a>
			</p>
		</div>
	</div>
</template>

<script>
    import data from '../data.js'

    export default {
        data () {
            return {
                works: data,
				showAllWorks: false
            }
        },
		computed: {
			displayedWorks: function () {
				if (this.showAllWorks)
					return this.works;

				return this.works.slice(0 ,6);
			}
		}
    }
</script>

<style scoped lang="scss">
.media-left .icon {
    vertical-align: bottom;
    border-radius: 50px;
    background: #f8faff;
    padding: 4px;
}

.featuredposts__list {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(245px,1fr));
    grid-gap: 3rem;
}

.featuredposts__item {
    padding: 0;
    flex: none;
    max-width: none;
	display: block;
}

.featuredpost {
    display: block;
    height: 300px;
    position: relative;
    border-radius: .5rem;
    overflow: hidden;
    background-color: var(--color-bg-offset);
    box-shadow: 14px 14px 60px -10px rgba(0, 0, 0, 0.3);
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
    display: inline-flex;
    align-items: center;
}
</style>