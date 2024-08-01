const rentalHouseInfo = [
    {
        id: 1,
        propertyName: "Eastleigh Hotspot",
        description: "It sits on a 100 x 100 plot",
        units: "30",
        applicants: "70",
        beds: "2",
        baths: "3",
        price: "10,000",
        img: './Assets/imprimante/hp1.webp'
    },
    {
        id: 2,
        propertyName: "Eastleigh Kwa Stage",
        description: "It sits on a 100 x 100 plot",
        units: "30",
        applicants: "70",
        beds: "2",
        baths: "3",
        price: "20,000",
        img: './Assets/imprimante/hp2.webp'
    },
    {
        id: 3,
        propertyName: "Eastleigh Kwa Samaki",
        description: "It sits on a 100 x 100 plot",
        units: "30",
        applicants: "70",
        beds: "2",
        baths: "3",
        price: "90,000",
        img: './Assets/imprimante/hp3.webp'
    }
]

const showSections = () => {
    const divCard = rentalHouseInfo.map((rental)=>`<section class="main-card"><div class="main-dynamic-object">
                        <div class="main-dynamic-top-section">
                            <img src=${rental.img} alt="rental image">
                        </div>
                        <div class="main-dynamic-bottom-section">
                            <h2>${rental.propertyName}</h2>
                            <p>${rental.description}</p>
                            <div class="main-dynamic-info">
                                <div>
                                    <p>${rental.units}+ Units</p>
                                    <p>Ksh. ${rental.price}</p>
                                </div>
                                <div>
                                    <p>${rental.beds} beds ${rental.baths} bath</p>
                                    <p>Applicants: ${rental.applicants}</p>
                                </div>
                            </div>
                            <button>View Property</button>
                        </div>
                    </div> </section>`)
    return divCard;
}

window.addEventListener('load', () => document.getElementById('map-main').innerHTML=showSections().join(''));





