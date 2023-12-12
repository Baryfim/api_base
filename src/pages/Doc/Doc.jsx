import Header from "../../components/Header/Header"
import Doc_description from "../../components/doc_description/doc_description"
import Container from "../../components/UI/container/container"
import classes from "./Doc.module.css"


const Doc = () => {
    const dataID_Parse = document.location.href.split("/")
    const dataID_Parse__method = dataID_Parse[dataID_Parse.length-1]
    const data = [
        {
            imageSrc: "https://api-cloud.ru/images/gibdd.png",
            alt: "gbdd",
            name: "ГИБДД",
            documentationLink: "/doc/gbdd",
            descriptions: [
                "Основная информация о ТС",
                "Проверка ДТП",
                "Нахождение в розыске",
                "Наличие ограничений",
                "Проверка штрафов",
                "Проверка фотографий нарушений",
                "Проверка диагностических карт (ЕАИСТО)",
                "Проверка пробега",
                "Проверка водительского удостоверения"
            ],
            description: "Алгоритм получения результата запроса с помощью нашего сервиса достаточно прост и практически одинаков для всех видов ресурсов. Получите ваш персональный ключ API в настройках вашего аккаунта. Для каждого пользователя генерируется уникальный аутентификационный токен, мы называем `персональный ключ API`. ",
            tariff: "0.5 руб./запрос",
            status: <span>
            <p style={{color: "#013A63", fontWeight: "bold", fontSize: "16px", marginBottom: "10px"}}>Обязательные</p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>surname</span> - Фамилия водителя; Разрешено: кириллица, латиница, цифры, знак "-"</p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>name</span> - Имя водителя; Разрешено: кириллица, латиница, цифры, знак "-"
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>patronymic</span> - Отчество водителя; Разрешено: кириллица, латиница, цифры, знак "-"
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>birthday</span> - День рождения водителя; В формате 22.12.2020 (дд.мм.гг). Разрешено: цифры, знак "."
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>driverDocSeries</span> - Серия документа водителя; Разрешено: кириллица, латиница, цифры
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>driverDocNumber</span> - Номер документа водителя; Разрешено: кириллица, латиница, цифры
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>token</span> - персональный ключ API
            </p>
            <p style={{color: "#013A63", fontWeight: "bold", fontSize: "16px", marginBottom: "5px", marginTop: "10px"}}>Дополнительные</p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", marginBottom: "5px"}}>date</span> - на какую дату получить информацию; В формате 22.12.2020 (дд.мм.гг), по умолчанию текущая дата запроса. Разрешено: цифры, знак "."
            </p>
        </span>
        },
        {
            imageSrc: "https://api-cloud.ru/images/gibdd.png",
            alt: "gbdd",
            name: "kbmLegal",
            documentationLink: "/doc/gbdd",
            descriptions: [
                "Основная информация о ТС",
                "Проверка ДТП",
                "Нахождение в розыске",
                "Наличие ограничений",
                "Проверка штрафов",
                "Проверка фотографий нарушений",
                "Проверка диагностических карт (ЕАИСТО)",
                "Проверка пробега",
                "Проверка водительского удостоверения"
            ],
            description: "Алгоритм получения результата запроса с помощью нашего сервиса достаточно прост и практически одинаков для всех видов ресурсов. Получите ваш персональный ключ API в настройках вашего аккаунта. Для каждого пользователя генерируется уникальный аутентификационный токен, мы называем `персональный ключ API`. ",
            tariff: "0.5 руб./запрос",
            status: <span>
            <p style={{color: "#013A63", fontWeight: "bold", fontSize: "16px", marginBottom: "10px"}}>Обязательные</p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>surname</span> - Фамилия водителя; Разрешено: кириллица, латиница, цифры, знак "-"</p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>name</span> - Имя водителя; Разрешено: кириллица, латиница, цифры, знак "-"
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>patronymic</span> - Отчество водителя; Разрешено: кириллица, латиница, цифры, знак "-"
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>birthday</span> - День рождения водителя; В формате 22.12.2020 (дд.мм.гг). Разрешено: цифры, знак "."
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>driverDocSeries</span> - Серия документа водителя; Разрешено: кириллица, латиница, цифры
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>driverDocNumber</span> - Номер документа водителя; Разрешено: кириллица, латиница, цифры
            </p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>token</span> - персональный ключ API
            </p>
            <p style={{color: "#013A63", fontWeight: "bold", fontSize: "16px", marginBottom: "5px", marginTop: "10px"}}>Дополнительные</p>
            <p>
                <span style={{color: "#013A63", fontWeight: "bold", marginBottom: "5px"}}>date</span> - на какую дату получить информацию; В формате 22.12.2020 (дд.мм.гг), по умолчанию текущая дата запроса. Разрешено: цифры, знак "."
            </p>
        </span>
        },
        {
            imageSrc: "https://api-cloud.ru/images/gibdd.png",
            alt: "gbdd",
            name: "osago",
            documentationLink: "/doc/gbdd",
            descriptions: [
                "Основная информация о ТС",
                "Проверка ДТП",
                "Нахождение в розыске",
                "Наличие ограничений",
                "Проверка штрафов",
                "Проверка фотографий нарушений",
                "Проверка диагностических карт (ЕАИСТО)",
                "Проверка пробега",
                "Проверка водительского удостоверения"
            ],
            description: "Алгоритм получения результата запроса с помощью нашего сервиса достаточно прост и практически одинаков для всех видов ресурсов. Получите ваш персональный ключ API в настройках вашего аккаунта. Для каждого пользователя генерируется уникальный аутентификационный токен, мы называем `персональный ключ API`. ",
            tariff: <span>Проверка КФ бонус/малус:<br/>• Вывод коэффициента бонус/малус<br/>• Вывод страховых возмещений</span>,
            status: 
            <span>
                <p style={{color: "#013A63", fontWeight: "bold", fontSize: "16px", marginBottom: "10px"}}>Обязательные</p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>surname</span> - Фамилия водителя; Разрешено: кириллица, латиница, цифры, знак "-"</p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>name</span> - Имя водителя; Разрешено: кириллица, латиница, цифры, знак "-"
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>patronymic</span> - Отчество водителя; Разрешено: кириллица, латиница, цифры, знак "-"
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>birthday</span> - День рождения водителя; В формате 22.12.2020 (дд.мм.гг). Разрешено: цифры, знак "."
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>driverDocSeries</span> - Серия документа водителя; Разрешено: кириллица, латиница, цифры
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>driverDocNumber</span> - Номер документа водителя; Разрешено: кириллица, латиница, цифры
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>token</span> - персональный ключ API
                </p>
                <p style={{color: "#013A63", fontWeight: "bold", fontSize: "16px", marginBottom: "5px", marginTop: "10px"}}>Дополнительные</p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", marginBottom: "5px"}}>date</span> - на какую дату получить информацию; В формате 22.12.2020 (дд.мм.гг), по умолчанию текущая дата запроса. Разрешено: цифры, знак "."
                </p>
            </span>
        },
        {
            imageSrc: "https://api-cloud.ru/images/gibdd.png",
            alt: "gbdd",
            name: "osagochek",
            documentationLink: "/doc/gbdd",
            descriptions: [
                "Основная информация о ТС",
                "Проверка ДТП",
                "Нахождение в розыске",
                "Наличие ограничений",
                "Проверка штрафов",
                "Проверка фотографий нарушений",
                "Проверка диагностических карт (ЕАИСТО)",
                "Проверка пробега",
                "Проверка водительского удостоверения"
            ],
            description: "Алгоритм получения результата запроса с помощью нашего сервиса достаточно прост и практически одинаков для всех видов ресурсов. Получите ваш персональный ключ API в настройках вашего аккаунта. Для каждого пользователя генерируется уникальный аутентификационный токен, мы называем `персональный ключ API`. ",
            tariff: "0.5 руб./запрос",
            status: 
            <span>
                <p style={{color: "#013A63", fontWeight: "bold", fontSize: "16px", marginBottom: "10px"}}>Обязательные</p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>surname</span> - Фамилия водителя; Разрешено: кириллица, латиница, цифры, знак "-"</p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>name</span> - Имя водителя; Разрешено: кириллица, латиница, цифры, знак "-"
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>patronymic</span> - Отчество водителя; Разрешено: кириллица, латиница, цифры, знак "-"
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>birthday</span> - День рождения водителя; В формате 22.12.2020 (дд.мм.гг). Разрешено: цифры, знак "."
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>driverDocSeries</span> - Серия документа водителя; Разрешено: кириллица, латиница, цифры
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>driverDocNumber</span> - Номер документа водителя; Разрешено: кириллица, латиница, цифры
                </p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", paddingBottom: "7px"}}>token</span> - персональный ключ API
                </p>
                <p style={{color: "#013A63", fontWeight: "bold", fontSize: "16px", marginBottom: "5px", marginTop: "10px"}}>Дополнительные</p>
                <p>
                    <span style={{color: "#013A63", fontWeight: "bold", marginBottom: "5px"}}>date</span> - на какую дату получить информацию; В формате 22.12.2020 (дд.мм.гг), по умолчанию текущая дата запроса. Разрешено: цифры, знак "."
                </p>
            </span>
        }
    ]
    const filteredData = data.filter(item => item.alt === dataID_Parse__method);

    return (
        <>
            <Header />
            <main>
                <Doc_description
                    title={filteredData[0].name}
                    price={filteredData[0].tariff}
                    description={filteredData[0].description}
                    status={filteredData[0].status ? "Работает" : "Не работает"}
                />
                <Container>
                    <div className={classes.Table}> 
                        <div className={classes.TableRow}>
                            <div className={classes.LableBlock} data-id="1">Тип</div>
                            <div className={classes.LableBlock} data-id="2">Описание</div>
                            <div className={classes.LableBlock} data-id="3">Параметры запроса</div>
                        </div>
                        {data.map(item => (
                            <div className={classes.TableRow__content} style={{borderBottom: "1px solid #cdcdcd"}}>
                                <div className={classes.LableBlock__content_item} data-id="1">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className={classes.LableBlock__content_item} data-id="2">{item.tariff}</div>
                                <div className={classes.LableBlock__content_item} data-id="3">{item.status}</div>
                            </div>
                        ))}
                    </div>
                    <div className={classes.Table}> 
                        <h2>Примеры запросов</h2>
                        <div className={classes.TableRow}>
                            <div className={classes.LableBlock} data-id="1">Статус</div>
                            <div className={classes.LableBlock} data-id="2">Запрос</div>
                            <div className={classes.LableBlock} data-id="3">Ответ</div>
                        </div>
                        {data.map(item => (
                            <div className={classes.TableRow__content} style={{borderBottom: "1px solid #cdcdcd"}}>
                                <div className={classes.LableBlock__content_item} data-id="1">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className={classes.LableBlock__content_item} data-id="2">{item.tariff}</div>
                                <div className={classes.LableBlock__content_item} data-id="3">{item.status ? "Работает" : "Не работает"}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    )
}

export default Doc;