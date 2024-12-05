export default async function Home() {
    const resp = await fetch("http://localhost:8000/getChoreList"); // fetch chore list
    const respText = await resp.text(); // get data as json text
    const choreList = await JSON.parse(respText).chores; // get data as object

    return (            
        <div class="outer-frame">
            <div class="list">
                <div class="frame">
                    <div class="inner-frame bg-lime-500">
                        { Object.keys(choreList).map(chore => (
                            <div class="flex items-center">
                                <input type="checkbox"/>{choreList[chore].label}
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
}
