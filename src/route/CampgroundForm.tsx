import React from "react";
import { useForm } from "react-hook-form";

import type { Campground } from '../types/common';
import { fetchData, uploadFile } from "../lib/api"; // fetchData 함수 import


export default function CampgroundForm() {

  // const [isRegistered, setIsRegistered] = useState<boolean>(false);
  // const [pronm, setPronm] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Campground>({
    defaultValues: {
      check_in_time: null,
      check_out_time: null,
    },
  });

  const onSubmit =  async  (data: Campground) => {
    const mainPhotoInput = (document.querySelector('input[name="main_photo_url"]') as HTMLInputElement);
    const mainFile = mainPhotoInput?.files?.[0];

    if (mainFile) {
      const uploadedUrl = await uploadFile(mainFile, "campground-photos");
      data.main_photo_url = uploadedUrl;
    }

    const fixEmptyTime = (value: unknown): string | null => {
      if (typeof value === "string") {
        return value === "" ? null : value;
      }
      return null;
    };
    data.check_in_time = fixEmptyTime(data.check_in_time);
    data.check_out_time = fixEmptyTime(data.check_out_time);
    data.quiet_hour_start = fixEmptyTime(data.quiet_hour_start);
    data.quiet_hour_end = fixEmptyTime(data.quiet_hour_end);

    const fixEmptyArrayAsString = (value: string | null | undefined): string | null => {
      if (!value || value.trim() === "") return null;
      const items = value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      return items.length > 0 ? items.join(",") : null;
    };
    data.tags = fixEmptyArrayAsString(data.tags);
  

    try {
      const result = await fetchData("campgrounds", "insert", {
          data,
      });

      console.log("등록:", result);     
      // setPronm(data.campground_name);
      alert(data.campground_name + " 캠핑장 등록이 완료되었습니다.");
      reset();
     
      // setIsRegistered(true)
  } catch (error) {
      console.error("등록 실패:", error);
      alert("필수 항목을 모두 기재해 주세요.");
  }
  };

  

  return (<>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 container">
        <div>
          <label className="block font-bold mb-1">캠핑장 이름 *</label>
          <input
            {...register("campground_name", { required: "이름은 필수입니다" })}
            className="border p-2 w-full rounded"
          />
          {errors.campground_name && (
            <p className="text-red-500 text-sm">{errors.campground_name.message}</p>
          )}
        </div>

        <div>
          <label className="block font-bold mb-1">주소</label>
          <input
            {...register("location")}
            className="border p-2 w-full rounded"
            placeholder="주소를 입력하세요"
          />
        </div>

        <div>
          <label className="block font-bold mb-1">가격</label>
          <input
            type="number"
            {...register("price")}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-bold mb-1">할인율 (%)</label>
          <input
            type="number"
            step="0.01"
            {...register("discount_rate")}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-bold mb-1">카테고리 *</label>
          <select
            {...register("category", { required: "카테고리는 필수입니다" })}
            className="border p-2 w-full rounded"
          >
            <option value="">선택하세요</option>
            <option value="CARAVAN">카라반</option>
            <option value="GLAMPING">글램핑</option>
            <option value="TENT">텐트</option>
            <option value="AUTO">오토캠핑</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label className="block font-bold mb-1">사이트 번호</label>
          <input
            type="text"
            {...register("site_numbers")}
            className="border p-2 w-full rounded"
            placeholder="사이트 번호를 쉼표로 구분하여 입력하세요 (예: 1, 2, 3)"
          />
        </div>

      <div>
        <label className="block font-bold mb-1">간략 설명</label>
        <textarea
          {...register("description")}
          className="border p-2 w-full rounded"
          rows={4}
          placeholder="캠핑장에 대한 간략한 설명을 입력하세요"
        />
      </div>

      <div>
        <label className="block font-bold mb-1">태그</label>
        <input
          type="text"
          {...register("tags")}
          className="border p-2 w-full rounded"
          placeholder="태그를 쉼표로 구분하여 입력하세요 (예: 가족, 애완동물, 조용한)"
        />
      </div>

      <div>
          <label className="block font-bold mb-1">메인 사진 (최대 2MB)</label>
          <input
              type="file"
              accept="image/*"
              {...register("main_photo_url", {
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                      const fileList = e.target.files;
                      if (fileList && fileList[0].size > 2 * 1024 * 1024) {
                          alert("파일 크기는 2MB를 초과할 수 없습니다.");
                          e.target.value = ""; // Reset the input
                      }
                  },
              })}
              className="border p-2 w-full rounded"
          />
          {errors.main_photo_url && (
              <p className="text-red-500 text-sm">{errors.main_photo_url.message}</p>
          )}
      </div>

      <div>
          <label className="block font-bold mb-1">서브 사진</label>
          <input
              type="file"
              accept="image/*"
              {...register("sub_photo_urls")}
              className="border p-2 w-full rounded"
          />
      </div>

      <div>
          <label className="block font-bold mb-1">시설 사진</label>
          <input
              type="file"
              accept="image/*"
              {...register("facility_photo_urls")}
              className="border p-2 w-full rounded"
          />
      </div>

      <div>
          <label className="block font-bold mb-1">레이아웃 이미지</label>
          <input
              type="file"
              accept="image/*"
              {...register("layout_image_url")}
              className="border p-2 w-full rounded"
          />
      </div>

        <div>
          <label className="block font-bold mb-1">공지가 있을 때 알림</label>
          <input
            type="checkbox"
            {...register("notify_vacancy")}
            className="mr-2"
          />
          빈자리 알림 허용
        </div>

        <div>
          <label className="block font-bold mb-1">양도 가능 여부</label>
          <input
            type="checkbox"
            {...register("allow_transfer")}
            className="mr-2"
          />
          양도 가능
        </div>

        <div>
          <label className="block font-bold mb-1">포인트 사용 여부</label>
          <input
            type="checkbox"
            {...register("use_points")}
            className="mr-2"
          />
          포인트 사용 가능
        </div>
      
        <div>
          <label className="block font-bold mb-1">현장 관리자 여부</label>
          <input
            type="checkbox"
            {...register("admin_on_site")}
            className="mr-2"
          />
          현장 관리자 있음 
        </div>

        <div>
          <label className="block font-bold mb-1">조용한 시간 시작</label>
          <input
            type="time"
            {...register("quiet_hour_start")}
            className="border p-2 w-full rounded"
          />  
        </div>

        <div>
          <label className="block font-bold mb-1">조용한 시간 종료</label>
          <input
            type="time"
            {...register("quiet_hour_end")}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-bold mb-1">체크인 시간</label>
          <input
            type="time"
            {...register("check_in_time")}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">체크아웃 시간</label>
          <input
            type="time"
            {...register("check_out_time")}
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">유아 방</label>
          <input
            type="checkbox"
            {...register("has_baby_room")}
            className="mr-2"
          />
          유아 방 있음
        </div>
        <div>
          <label className="block font-bold mb-1">주차장</label>
          <input
            type="checkbox"
            {...register("has_parking")}
            className="mr-2"
          />
          주차장 있음
        </div>
        <div>
          <label className="block font-bold mb-1">흡연 구역</label>
          <input
            type="checkbox"
            {...register("has_smoking_area")}
            className="mr-2"
          />
          흡연 구역 있음  
        </div>
        
        <div>
          <label className="block font-bold mb-1">상점</label>
          <input
            type="checkbox"
            {...register("has_store")}
            className="mr-2"
          />
          상점 있음
        </div>

        <div>
          <label className="block font-bold mb-1">수영장</label>
          <input
            type="checkbox"
            {...register("has_pool")}
            className="mr-2"
          />
          수영장 있음
        </div>
        <div>
          <label className="block font-bold mb-1">개인 샤워실</label>
          <input
            type="checkbox"
            {...register("has_private_shower")}
            className="mr-2"
          />
          개인 샤워실 있음
        </div>
        <div>
          <label className="block font-bold mb-1">공용 샤워실</label>
          <input
            type="checkbox"
            {...register("has_shared_shower")}
            className="mr-2"
          />
          공용 샤워실 있음
        </div>
        <div>
          <label className="block font-bold mb-1">식수</label>
          <input
            type="checkbox"
            {...register("has_water")}
            className="mr-2"
          />
          식수 있음
        </div>
        <div>
          <label className="block font-bold mb-1">카페</label>
          <input
            type="checkbox"
            {...register("has_cafe")}
            className="mr-2"
          />
          카페 있음
        </div>
        <div>
          <label className="block font-bold mb-1">화로대</label>
          <input
            type="checkbox"
            {...register("has_fire_pit")}
            className="mr-2"
          />
          화로대 있음
        </div>
        <div>
          <label className="block font-bold mb-1">개인 화장실</label>
          <input
            type="checkbox"
            {...register("has_private_toilet")}
            className="mr-2"
          />
          개인 화장실 있음
        </div>
        <div>
          <label className="block font-bold mb-1">공용 화장실</label>
          <input
            type="checkbox"
            {...register("has_shared_toilet")}
            className="mr-2"
          />
          공용 화장실 있음
        </div>
        <div>
          <label className="block font-bold mb-1">바베큐</label>
          <input
            type="checkbox"
            {...register("has_bbq")}
            className="mr-2"
          />
          바베큐 가능
        </div>
        <div>
          <label className="block font-bold mb-1">장비 대여</label>
          <input
            type="checkbox"
            {...register("has_gear_rental")}
            className="mr-2"
          />
          장비 대여 가능
        </div>
        <div>
          <label className="block font-bold mb-1">애완동물 허용</label>
          <input
            type="checkbox"
            {...register("allow_pets")}
            className="mr-2"
          />
          애완동물 허용
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          저장하기
        </button>
      </form>
    </>
  );
}
