import React from 'react' 
import { Link } from 'react-router-dom';
import FooterWrapper from './footerWrapper'

const Footer = () => {
    return (
        <FooterWrapper>

            {/* Start on Footer */}

            <footer>
                <div className='container'>
                    <Link to={"#"} className='link_one'>UzTicket</Link>
                    <div className='row mt-3'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3 d-grid'>
                            <Link className='links link_footer' to={"#"}>Qayta aloqa</Link>
                            <Link className='links link_footer' to={"#"}>Ma'lumot</Link>
                            <Link className='links link_footer' to={"#"}>So'rov natijalari</Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3 d-grid'>
                            <Link className='links footer_link' to={"#"}>Sheriklik dasturi</Link>
                            <Link className='links footer_link' to={"#"}>Sodiqlik dasturi</Link>
                            <Link className='links footer_link' to={"#"}>Sovg'a sertifikatlari</Link>
                            <Link className='links footer_link' to={"#"}>Huquqiy ma'lumotlar</Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3 d-grid'>
                            <Link className='links link_footer' to={"#"}>Kompaniya haqida</Link>
                            <Link className='links link_footer' to={"#"}>Bizning bo'sh ish o'rinlarimiz</Link>
                            <Link className='links link_footer' to={"#"}>Mamlakat yo'riqnomasi</Link>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-3 d-flex'>
                            <div className='d-grid w40'>
                                <Link className='links link_footer' to={"#"}>UzTicket saytida reklama</Link>
                                <Link className='links link_footer' to={"#"}>Ish safari chiptalari</Link>
                                <Link className='links link_footer' to={"#"}>Kontaktlar</Link>
                            </div>
                            <div className='d-grid w60 footer_card ms-5'>
                                <p>Qo'shilish:</p>
                                <div>
                                    <img className='footer_img' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcyBpZD0iZGVmczEyIi8+PGcgaWQ9Imc1NjA4Ij48cmVjdCBoZWlnaHQ9IjUxMiIgaWQ9InJlY3QyOTg3IiByeD0iNjQiIHJ5PSI2NCIgc3R5bGU9ImZpbGw6IzRjNzVhMztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgd2lkdGg9IjUxMiIgeD0iMCIgeT0iMCIvPjxwYXRoIGQ9Im0gMjUxLjcwOTU1LDM2OS4xNDQ1NSBoIDIzLjkwNzIyIGMgMCwwIDcuMjE5MjcsLTAuNzk3NjIgMTAuOTEwMDcsLTQuNzY5MDMgMy4zOTcwNSwtMy42NTAyMSAzLjI4ODQxLC0xMC41MDE2NyAzLjI4ODQxLC0xMC41MDE2NyAwLDAgLTAuNDcxNzUsLTMyLjA4MDU1IDE0LjQyMDU0LC0zNi44MDMwMiAxNC42Nzk2NCwtNC42NTQ0IDMzLjUyNjQ4LDMxLjAwMzUyIDUzLjUwMjk3LDQ0LjcxMzYgMTUuMTA3MTIsMTAuMzc1MSAyNi41ODc5NCw4LjEwNDAxIDI2LjU4Nzk0LDguMTA0MDEgbCA1My40MTgxNCwtMC43NDM4OSBjIDAsMCAyNy45MzcxOSwtMS43MjU0IDE0LjY5MDQ2LC0yMy42OTcxMSAtMS4wODQyMSwtMS43OTM0NiAtNy43MjA3NywtMTYuMjQ5ODMgLTM5LjcxNjUxLC00NS45NDk0MyAtMzMuNTAyNjcsLTMxLjA5NDI2IC0yOS4wMTE4NywtMjYuMDYxMzQgMTEuMzM3NTUsLTc5LjgzNzc3IDI0LjU2OTg3LC0zMi43NTA0MiAzNC4zOTY4OSwtNTIuNzM4ODEgMzEuMzIzNDQsLTYxLjMwNDkyIC0yLjkyNTQzLC04LjE1Nzc1IC0yMC45OTczNywtNi4wMDYwOCAtMjAuOTk3MzcsLTYuMDA2MDggbCAtNjAuMTQ3ODksMC4zNzYxNCBjIDAsMCAtNC40NTYxNywtMC42MDg5OCAtNy43NjQ5MiwxLjM2ODM3IC0zLjIyOTg2LDEuOTM2NzUgLTUuMzA1MDksNi40NTM4NCAtNS4zMDUwOSw2LjQ1Mzg0IDAsMCAtOS41MjczNSwyNS4zNDI1MiAtMjIuMjE4OTEsNDYuODk1MTIgLTI2Ljc3NzgxLDQ1LjQ3NDIxIC0zNy40ODgzNyw0Ny44ODE0MSAtNDEuODY1NzYsNDUuMDUxNTEgLTEwLjE4NDA5LC02LjU4MTYgLTcuNjM3MjIsLTI2LjQzMzg4IC03LjYzNzIyLC00MC41NDM5NyAwLC00NC4wNzIzOSA2LjY4NDMxLC02Mi40NTAwMSAtMTMuMDIxMDksLTY3LjIwNDcyIC02LjUzODYxLC0xLjU3ODUyIC0xMS4zNTMsLTIuNjI1NzEgLTI4LjA3NDUzLC0yLjc5NDA3IC0yMS40NTgxOSwtMC4yMTg1MSAtMzkuNjIzMzIsMC4wNjgxIC00OS45MDUyNSw1LjEwMzM2IC02Ljg0MTk4LDMuMzU4ODcgLTEyLjEyMzI1LDEwLjgxODEgLTguOTAyODEsMTEuMjUwMzUgMy45NzQ5LDAuNTMwMTYgMTIuOTc1NjYsMi40MjUxMSAxNy43NDcwNiw4LjkyMTkzIDYuMTYzNzcsOC4zODcwMiA1Ljk0NzY0LDI3LjIxNTk5IDUuOTQ3NjQsMjcuMjE1OTkgMCwwIDMuNTQzOTMsNTEuODgwMjggLTguMjcwMDEsNTguMzIwOTkgLTguMTA4NzQsNC40MjE1NyAtMTkuMjI5MDEsLTQuNjAxODcgLTQzLjEwODgxLC00NS44NjEwOCAtMTIuMjMwNjEsLTIxLjEzMTEgLTIxLjQ2NzgzLC00NC40OTc0NiAtMjEuNDY3ODMsLTQ0LjQ5NzQ2IDAsMCAtMS43NzY3MywtNC4zNjA2NyAtNC45NTY1LC02LjY5OTgxIC0zLjg1NDQsLTIuODMzNDkgLTkuMjQxODcsLTMuNzI5MDMgLTkuMjQxODcsLTMuNzI5MDMgbCAtNTcuMTU0NDk5LDAuMzcwMTYgYyAwLDAgLTguNTgwMzcsMC4yNDM1OCAtMTEuNzI1NTIsMy45NzQ5OSAtMi44MDcyNSwzLjMyMDY2IC0wLjIyNDQ4LDEwLjE4MTY3IC0wLjIyNDQ4LDEwLjE4MTY3IDAsMCA0NC43NDIyNTksMTA0LjY4NTk0IDk1LjQwNjk0OSwxNTcuNDM5MDcgNDYuNDY3NjMsNDguMzgwNTIgOTkuMjE4NDgsNDUuMjAxOTYgOTkuMjE4NDgsNDUuMjAxOTYgbCAwLDAgeiIgaWQ9InBhdGg5IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtcnVsZTpldmVub2RkIi8+PC9nPjwvc3ZnPg==" alt=""/>
                                    <img className='footer_img' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcyBpZD0iZGVmczEyIi8+PGcgaWQ9Imc1NDk5Ij48cmVjdCBoZWlnaHQ9IjUxMiIgaWQ9InJlY3QyOTg3IiByeD0iNjQiIHJ5PSI2NCIgc3R5bGU9ImZpbGw6I2Y0ODQyMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgd2lkdGg9IjUxMiIgeD0iMCIgeT0iNS42ODQzNDE5ZS0wMTQiLz48ZyBpZD0iZzc5ODAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMzU2OTk3NCwwLDAsMS4zNTY5OTc0LC0xMzI3Ljg2NzksLTUzNi4zNDI2NCkiPjxwYXRoIGQ9Im0gMTE2Ny4xODksNTg1LjcxNzc5IGMgNDEuMjAxOSwwIDc0LjU5NzksLTMzLjQwMTEyIDc0LjU5NzksLTc0LjYwNDAxIDAsLTQxLjIwMTg2IC0zMy4zOTYsLTc0LjYwNCAtNzQuNTk3OSwtNzQuNjA0IC00MS4yMDgsMCAtNzQuNjA0LDMzLjQwMjE0IC03NC42MDQsNzQuNjA0IDAsNDEuMjAxODcgMzMuMzk2LDc0LjYwNDAxIDc0LjYwNCw3NC42MDQwMSB6IG0gMCwtMTExLjMwNTg3IGMgMjAuMjY1OSwwIDM2LjcwMTksMTYuNDI5NzcgMzYuNzAxOSwzNi43MDE4NiAwLDIwLjI3MjA5IC0xNi40MzYsMzYuNzAxODcgLTM2LjcwMTksMzYuNzAxODcgLTIwLjI3MjEsMCAtMzYuNzA4LC0xNi40Mjk3OCAtMzYuNzA4LC0zNi43MDE4NyAwLC0yMC4yNzIwOSAxNi40MzU5LC0zNi43MDE4NiAzNi43MDgsLTM2LjcwMTg2IHoiIGlkPSJwYXRoOSIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPjxwYXRoIGQ9Im0gMTIyMS44MDM1LDU5MS41MzQxOCBjIC0yMC45NTg1LDE2LjUxNTA3IC01NC42MTQ1LDE2LjUxNTA3IC01NC42MTQ1LDE2LjUxNTA3IDAsMCAtMzMuNjYzMSwwIC01NC42MTg2LC0xNi41MTUwNyAtMTUuNTA0OSwtMTIuMjE0NDMgLTI3LjE2OTYsLTUuMTc5MjYgLTMxLjM4MDgsMy4yODc0IC03LjM0MjQsMTQuNzQ4NTcgMC45NTE2LDIxLjg3OTMgMTkuNjc3MSwzMy44OTY0MyAxNS45OTQsMTAuMjY5MTIgMzcuOTY1OCwxNC4xMDUyNyA1Mi4xNTQ0LDE1LjUzNzc5IGwgLTExLjg0NzYsMTEuODQ1NTEgYyAtMTYuNjg0NiwxNi42Nzg0NiAtMzIuNzg3NiwzMi43ODU1NiAtNDMuOTU5LDQzLjk1OSAtNi42ODE3LDYuNjc3NTUgLTYuNjgxNywxNy41MTU5OCAwLDI0LjE5MjUxIGwgMi4wMTUyLDIuMDE0MTYgYyA2LjY4MzcsNi42ODE2NiAxNy41MTM5LDYuNjgxNjYgMjQuMTkxNCwwIGwgNDMuOTY1MiwtNDMuOTU3OTggYyAxNi42ODQ2LDE2LjY4MzYgMzIuNzg3NiwzMi43ODY1OSA0My45NTksNDMuOTU3OTggNi42ODE3LDYuNjgxNjYgMTcuNTExOSw2LjY4MTY2IDI0LjE5NTYsMCBsIDIuMDE1MiwtMi4wMTQxNiBjIDYuNjc3NSwtNi42ODY4IDYuNjc3NSwtMTcuNTE0OTYgMCwtMjQuMTkyNTEgbCAtNDMuOTY4MywtNDMuOTY1MTcgLTExLjg4MDQsLTExLjg4MDQ1IGMgMTQuMjAxOSwtMS40NTkyMyAzNS45NDE0LC01LjMxMjg1IDUxLjc5NjcsLTE1LjQ5NzcxIDE4LjcyMjUsLTEyLjAxNzEyIDI3LjAyMTYsLTE5LjE0Nzg2IDE5LjY3NzEsLTMzLjg5NjQzIC00LjIwOTEsLTguNDY0NiAtMTUuODgxLC0xNS41MDA4IC0zMS4zNzc3LC0zLjI4NjM3IHoiIGlkPSJwYXRoMTEtMCIgc3R5bGU9ImZpbGw6I2ZmZmZmZiIvPjwvZz48L2c+PC9zdmc+" alt=""/>
                                    <img className='footer_img' src="data:image/png;base64,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" alt=""/>
                                </div>
                                <div className='mt-3'>
                                    <img className='footer_img-2' src="https://cdn1.tu-tu.ru/images2/avia/app_badges/app-store-badge-retina.png" alt=""/>
                                    <img className='footer_img-2' src="https://cdn1.tu-tu.ru/images2/avia/app_badges/google-play-badge-retina.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

            {/* End on Footer */}

        </FooterWrapper>
    )
}

export default Footer;