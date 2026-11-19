export default function computers() {
    const computers = [
        {
            name: "Macbook Pro 14\"",
            operatingSystem: "MacOS 27",
            processor: "M5",
            hasDedicatedGPU: false,
            memory: "16gb LPDDR5",
            storage: "512gb SSD"
        },
        {
            name: "Lenovo Ideapad Gaming 3",
            operatingSystem: "Windows 10 LTSC && Arch Linux",
            processor: "AMD Ryzen 5 5600H",
            hasDedicatedGPU: true,
            graphics: "NVIDIA GeForce RTX 3060 max-Q",
            memory: "32gb DDR4",
            storage: "2tb SSD (2x 1tb M.2)"
        },
        {
            name: "Toshiba Portege Z930",
            operatingSystem: "Arch Linux",
            processor: "Intel i5 3337U",
            hasDedicatedGPU: false,
            memory: "6gb DDR3",
            storage: "256gb SSD"
        },
        {
            name: "Microsoft Surface Go 2",
            operatingSystem: "Windows 11 Pro",
            processor: "Intel Core M3-8100Y",
            hasDedicatedGPU: false,
            memory: "8gb LPDDR3",
            storage: "256gb SSD"
        },
    ]

    return <div>
        <div className="globalUpperDiv">
            <div className="globalPositionDiv">
                <h2>
                    Computers
                </h2>
                {
                    computers.map((komp, index) => (
                        <div id="globalIndexDiv" key={index}>
                            <h4>&gt; {komp.name}</h4>
                            <p>OS: {komp.operatingSystem}</p>
                            <p>CPU: {komp.processor}</p>
                            {
                                komp.hasDedicatedGPU
                                    ?
                                    <p>GPU: {komp.graphics}</p>
                                    :
                                    ""
                            }
                            <p>RAM: {komp.memory}</p>
                            <p>Storage: {komp.storage}</p>
                            {
                                index == computers.length - 1
                                    ?
                                    ""
                                    :
                                    <br></br>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}