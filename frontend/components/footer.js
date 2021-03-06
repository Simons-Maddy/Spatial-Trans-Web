import Link from "next/link";

function Footer(){
    return(
        <div id="footer" className="modal-footer">
            <footer className="h5 small">
                <p>Copyright &copy; 2021-{String(new Date().getFullYear())} |
                    <a href="https://future.pku.edu.cn/" target="_blank" rel="noreferrer"> College of Future Technology (CFT), </a>
                    <a href="https://english.pku.edu.cn" target="_blank" rel="noreferrer"> Peking University</a>
                </p>
                <p>
                    All Rights Reserved | E-mail:<span> </span>
                    <a target="_blank"  href="mailto:xiaochunfu@126.com" rel="noreferrer">
                        <i className="glyphicon glyphicon-envelope"></i>
                    </a>
                </p>
                <p><a href="https://beian.miit.gov.cn/integrated/recordquery#/Integrated/recordQuery" target="_blank" id="beian" rel="noreferrer">
                    苏ICP备2021011214号-1</a></p>
            </footer>
        </div>
    )
}

export default Footer