import './style.scss';

import { FallbackImage } from '@/shared/ui/FallbackImage/FallbackImage';
import { FallbackVideo } from '@/shared/ui/FallbackVideo/FallbackVideo';
import Field from '@/shared/ui/Field/Field';
import Textarea from '@/shared/ui/Textarea/Textarea';

import type { AddPageProps } from "./types";
export default function AddPage({
    isotopeDraft,
}: AddPageProps) {
    return (<>
        <form method="post" encType="multipart/form-data" className="form">
            <div className="form__media-wrapper">
                <Field
                    className="form__video-field"
                    label="Видео"
                    type="file"
                    name="video"
                    id="isotope-video"
                    accept="video/*"
                    required={true}
                />

                <FallbackVideo
                    src={isotopeDraft.videoUrl}
                    fallbackSrc="/assets/isotope.mp4"
                    className="form__media-preview"
                    controls={true}
                    muted={true}
                />
            </div>

            <div className="form__media-wrapper">
                <Field
                    className="form__image-field"
                    label="Фото"
                    type="file"
                    name="image"
                    id="isotope-image"
                    accept=".png, .jpg, .jpeg"
                    required={true}
                />

                <FallbackImage
                    src={isotopeDraft.imageUrl}
                    fallbackSrc="/assets/isotope.png"
                    className="form__media-preview"
                />
            </div>

            <Field
                className="form__name-field"
                label="Название изотопа"
                type="text"
                name="name"
                id="isotope-name"
                placeholder="Название"
                defaultValue={isotopeDraft.name}
                maxLength={20}
                minLength={5}
                required={true}
            />

            <Field
                className="form__half-life-field"
                label="Период полураспада (нс.)"
                type="text"
                inputMode="numeric"
                pattern="[0-9]+"
                name="halfLife"
                id="isotope-half-life"
                placeholder="Период в наносекундах"
                defaultValue={isotopeDraft.halfLife?.toString()}
                maxLength={27}
                required={true}
            />

            <div className="form__radiation-type-field radiation-type">
                <span className="radiation-type__label">α-распад</span>
                <div className="radiation-type__control">
                    <div className="radiation-type__prompt">Происходит α-распад</div>
                    <div className="radiation-type__divider"></div>
                    <input
                        type="checkbox"
                        className="radiation-type__input"
                        defaultChecked={isotopeDraft.isAlpha ?? false}
                    />
                </div>
            </div>

            <Textarea
                className="form__description-field"
                label="Описание"
                defaultValue={isotopeDraft.description ?? ''}
                name="description"
                id="isotope-description"
                placeholder="Описание"
                maxLength={200}
                required={true}

            />

            <button className="form__submit" type="button">Сохранить</button>
        </form>
    </>);
}
