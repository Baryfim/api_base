import classes from "./AllTable.module.css"
import Container from "../UI/container/container"
import { Link } from "react-router-dom"

const AllTable = (props) => {
    const apiData = [
        {
            imageSrc: "https://api-cloud.ru/images/gibdd.png",
            alt: "gbdd",
            name: "Гибдд",
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
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/rsa.svg",
            alt: "РСА",
            name: "РСА",
            documentationLink: "/doc/rsa",
            descriptions: [
                "Проверка КБМ и страховых выплат",
                "Проверка полиса ОСАГО по Регистрационному номеру или VIN",
                "Проверка полиса ОСАГО по серии и номеру"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/fssp.svg",
            alt: "ФССП",
            name: "ФССП",
            documentationLink: "/doc/fssp",
            descriptions: [
                "Поиск физического лица",
                "Поиск юридического лица",
                "Поиск по номеру исполнительного производства"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/zalog.png",
            alt: "Реестр-залогов",
            name: "Реестр-залогов",
            documentationLink: "/doc/zalog",
            descriptions: [
                "Проверка в реестре залогов по VIN номеру",
                "Проверка на нахождение в лизинге по VIN номеру"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/gost.png",
            alt: "Росстандарт",
            name: "Росстандарт",
            documentationLink: "/doc/fssp",
            descriptions: [
                "Проверка отзывных компаний по VIN номеру",
                "Дата отзывной компании",
                "Организация отзывной компании",
                "Марка",
                "Модель",
                "Причина отзывной компании",
                "Рекомендация"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/autophoto.png",
            alt: "Фото транспортных средств",
            name: "Фотографии транспортных средств",
            documentationLink: "/doc/fssp",
            descriptions: [
                "Поиск фотографий по регистрационному номеру",
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/taxi.png",
            alt: "Проверка ТС по базе такси ",
            name: "Проверка ТС по базе такси ",
            documentationLink: "/doc/fssp",
            descriptions: [
                "Проверка на причастность использования транспортного средства в качестве такси",
                "Полная информация о лицензии при её наличии",
                "История лицензий"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/converter.png",
            alt: "Конвертация VIN <-> Рег.номер",
            name: "Конвертация VIN <-> Рег.номер",
            documentationLink: "/doc/fssp",
            descriptions: [
                "Найти Регистрационный номер ТС по VIN коду",
                "Найти VIN номер по Регистрационному номеру ТС",
                "Марка ТС",
                "Модель ТС",
                "Год ТС",
                "Регистрационный номер",
                "VIN номер"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/nalog.png",
            alt: "Федеральная налоговая служба ",
            name: "Федеральная налоговая служба ",
            documentationLink: "/doc/fssp",
            descriptions: [
                "Поиск ИНН физического лица"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/carprice.png",
            alt: "Оценка стоимости авто",
            name: "Оценка стоимости авто",
            documentationLink: "/doc/fssp",
            descriptions: [
                "Оценка стоимости авто для самостоятельной продажи",
                "Оценка стоимости авто для продажи в Trade-In",
                "Дополнительная информация"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        },
        {
            imageSrc: "https://api-cloud.ru/images/mvd.png",
            alt: "МВД",
            name: "МВД",
            documentationLink: "/doc/fssp",
            descriptions: [
                "Проверка по списку недействительных российских паспортов"
            ],
            tariff: "0.5 руб./запрос",
            status: true
        }
    ]
    return (
        <div className={classes.AllTable}>
            <Container>
                <div className={classes.Table}>
                    <h2 className={classes.Lable_item}>Список {props.status_Checking}:</h2>    
                    <div className={classes.TableRow}>
                        <div className={classes.LableBlock} data-id="1">API</div>
                        <div className={classes.LableBlock} data-id="2">*Тариф</div>
                        <div className={classes.LableBlock} data-id="3">Статус</div>
                        <div className={classes.LableBlock} data-id="4">Услуги</div>
                    </div>
                    {apiData.map(item => (
                        <div className={classes.TableRow__content} style={{borderBottom: "1px solid #cdcdcd"}}>
                            <div className={classes.LableBlock__content_item} data-id="1">
                                <h3>{item.name}</h3>
                                <span>-</span>
                                <Link to={item.documentationLink}>Документация</Link>
                            </div>
                            <div className={classes.LableBlock__content_item} data-id="2">{item.tariff}</div>
                            <div className={classes.LableBlock__content_item} data-id="3">{item.status ? "Работает" : "Не работает"}</div>
                            <div className={classes.LableBlock__content_item} data-id="4">
                                <div className={classes.ListItems}>
                                    {item.descriptions.map(docs => <p>{docs}</p>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllTable