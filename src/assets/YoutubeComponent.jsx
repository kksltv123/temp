import { YoutubeCloseButton } from "./CloseButton";
import { useTranslation } from "react-i18next";

const YoutubeComponent = ({ setYoutubePopUpState }) => {
    const { t } = useTranslation();

    return (
    <div className="popup_wrap sel_link">
        <div className="youtube_inner">
            <YoutubeCloseButton setYoutubePopUpState={setYoutubePopUpState} />
            <iframe width="854" height="480" src={t('section.YoutubeLink')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>);
};


export default YoutubeComponent;