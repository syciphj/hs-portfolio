import  website  from '$lib/config/website';

const {cloudinaryURL, cloudinaryVersionFolder} = website;

export enum CropEnum {
  Crop = 'c_crop',
  Scale = 'c_scale',
	Fill = 'c_fill'
}

export enum QualityEnum {
	Auto = 'q_auto',
	Q90 = 'q_90',
  Q80 = 'q_80'
}

export enum FormatEnum {
  Avif = 'avif',
  Webp = 'webp',
  Jpg = 'jpg',
  Png = 'png'
}

export interface ImageParams {
  height?: number,
  width: number,
  cropMode?: CropEnum,
  quality?: QualityEnum,
  format?: FormatEnum

}

const numResolutionTypes = 3;

export const key = Symbol('imgService');

export class ImageCloudinaryService {
  private readonly defaultCropMode = CropEnum.Scale;
  private readonly defaultQuality = QualityEnum.Auto;
  private readonly defaultFormat = FormatEnum.Jpg;
  private readonly defaultPictureFormat = FormatEnum.Webp;

  private buildCloudinaryURL = (fileString: string, params: ImageParams): string => {
    const width = `w_${params.width}`;
    const height = params.height ? `,h_${params.height}` : '';
    const cropMode = params.cropMode ? params.cropMode : this.defaultCropMode;
    const quality = params.quality ? params.quality : this.defaultQuality;
    const editParams =  `${width}${height},${cropMode},${quality}`;
    const fileFormat = params.format ? params.format : this.defaultFormat;

    return `${cloudinaryURL}/${editParams}/${cloudinaryVersionFolder}/${fileString}.${fileFormat}`
  }

  getSizesSrcset = (fileString: string, params: ImageParams): string[] => {
    const sizesSrcset = [];
    const initialWidth = params.width;
    const sizesParams = {...params};
    for(let i = 1; i <= numResolutionTypes; i++) {
      sizesParams.width = initialWidth * i;
      const comma = i === numResolutionTypes ? '' : ', ';
      sizesSrcset.push(`${this.buildCloudinaryURL(fileString, sizesParams)} ${sizesParams.width}w` + comma)
    }
    return sizesSrcset;
  }

  getDensitySrcset = (fileString: string, params: ImageParams): string[] => {
    const densitySrcset = [];
    const initialWidth = params.width;
    const sizesParams = {...params};
    sizesParams.format = this.defaultPictureFormat;
    for(let i = 1; i <= numResolutionTypes; i++) {
      sizesParams.width = initialWidth * i;
      const comma = i === numResolutionTypes ? '' : ', ';
      const resolution = i === 1 ? '' : ` ${i}x`;
      densitySrcset.push(`${this.buildCloudinaryURL(fileString, sizesParams)}` + resolution + comma)
    }
    return densitySrcset;
  }

}