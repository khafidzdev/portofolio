import { portfolioList } from '../data/DataPortfolio'
import { Link } from 'react-router-dom'
import '../styles/Portfolio.css'
import ScrollFloat from '../components/ScrollFloat/ScrollFloat';

function Portfolio() {
    return (
        <section id="portfolio">
            <div className="wrapper">
            <h3> <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
                Portfolio
</ScrollFloat>  
</h3>                     <div className="grid">
                    {
                        portfolioList.map((item) => {
                            return (
                                <div className="item" key={item.id}>
                                    <Link to={`/portfolio/${item.id}`}><img src={item.image} /></Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Portfolio