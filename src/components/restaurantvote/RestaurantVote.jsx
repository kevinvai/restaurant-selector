import React from 'react';
import {Link} from 'react-router-dom';
import VoteCardContainer from '../votecardcontainer/VoteCardContainer'

class RestaurantVote extends React.Component{
    constructor(){
        super();
        this.state = {
            restaurants: [
                {
                    name: "La cura",
                    img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/comer-mariscos-meses-que-no-llevan-r2-670x447.jpg',
                    description: '',
                    category: 'Seafood',
                },
                {
                    name: "Taco real",
                    img: 'https://www.thecuriouschickpea.com/wp-content/uploads/2018/05/carneasadatacos-2-720x540.jpg',
                    description: 'Because why not',
                    category: 'Taco',
                },
                {
                    name: "Holy Cow",
                    img: 'https://www.holycow.mx/assets/img/logo.png',
                    description: '',
                    category: 'Burger',
                },
                {
                    name: "Brujula pizza",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKW4dZmARwn3T_IJUNuZYsw_lnsxRWWSAlqZm3yde-d2Vd8k4z',
                    description: '',
                    category: 'Pizza',
                },
                {
                    name: "Alfreditos",
                    img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/comer-mariscos-meses-que-no-llevan-r2-670x447.jpg',
                    description: '',
                    category: 'Seafood',
                },
                {
                    name: "3&3 grill",
                    img: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t1.0-9/17884411_795020130647934_6451018770341471862_n.png?_nc_cat=109&amp;_nc_oc=AQkAOlkUT6UnlBTTCEIfSnJssJSqe7w1aBsVFjsafLKEuRNiKYKplIe4ETuvKbq_-i4&amp;_nc_ht=scontent.ftij2-1.fna&amp;oh=96dca9cef4bdf1158ce378649c18ef1e&amp;oe=5DA52C4F',
                    description: 'whenever we are tired of holy cow',
                    category: 'Burger',
                },
                {
                    name: "CarlsJr",
                    img: 'https://seeklogo.net/wp-content/uploads/2017/04/carls-jr-logo-01.png',
                    description: 'Close as fuck and tasty',
                    category: 'Burger',
                },
            ],
            winnerRestaurant: '',
        }
    }
    render(){
        return(
            <div>
               <Link to="/">Go to random selection</Link>
                here we vote!
                <VoteCardContainer restaurants={this.state.restaurants}/>
            </div>
        )
    }
}

export default RestaurantVote;