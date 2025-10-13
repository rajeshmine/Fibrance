import React from 'react';
import CategorySection from '../components/CategorySection';
import HeroBannerCarousel from '../components/HeroBannerCarousel';
import MultiCarousel from '../components/MultiCarousel';


function Home() {
    return (
        <div>
            <section>
                <CategorySection />
            </section>
            <section>
                <HeroBannerCarousel />
            </section>
            <section>
                <MultiCarousel />
            </section>
        </div>
    );
}

export default Home;
