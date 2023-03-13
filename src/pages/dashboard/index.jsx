import CardGroup from "./components/card-group/view";
import CreateFlashcardGroup from "./components/card-group/create";
const Dashboard = (props) => {


    const group = {
        name: "Group 1",
        description: "This example has four items per row for desktop and tablet devices. On mobile devices, two items are displayed per row."
    }
    return (
        <>
            <div className="2xl:container p-3 bg-slate-100">
                <CreateFlashcardGroup />
            </div>
            <div className="2xl:container p-3 bg-slate-50 text-black flex justify-center">


                <div className="grid md:grid-cols-4 max-auto gap-4 pt-4 w-3/4 ">

                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                    <CardGroup name={group.name} description={group.description} />
                </div>
            </div>
        </>

    )
}

export default Dashboard;