import React from "react";
import DatePicker from "react-datepicker";
import "../scssAll/Oop.scss";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
export const Opp = () => {
  const [startDate, setStartDate] = useState(null);
  const [startDate1, setStartDate1] = useState(null);
  return (
    <div className="page-oop">
      <div className="nav-search">
        <div className="nav-search-oop">
          <div className="search-oop">
            <div className="icon-search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="input-search">
              <input
                type="text"
                className="input-search-oop"
                placeholder="Tìm kiếm cơ hội"
              />
            </div>
          </div>
          <div className="state-oop">
            <select className="select-state">
              <option selected>Vui lòng chọn trạng thái</option>
              <option>Đang tiến hành </option>
              <option>Thành công</option>
              <option>Thất bại</option>
            </select>
          </div>
          <div className="creator-oop">
            <select className="select-creator">
              <option selected>Vui lòng chọn</option>
              <option>Admin đây</option>
              <option>Võ Quốc Cường</option>
              <option>demo Ban giám đốc</option>
              <option>thần Lan Anh</option>
            </select>
          </div>
          <div className="startTime-oop">
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Từ"
              wrapperClassName="datePicker"
            />
          </div>
          <div className="endtime-oop">
            <DatePicker
              showIcon
              selected={startDate1}
              onChange={(date) => setStartDate1(date)}
              placeholderText="Đến"
            />
          </div>
        </div>
      </div>

      <table className="table table-bordered table-hover custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên cơ hội</th>
            <th>Thời gian đăng kí</th>
            <th>Người phụ thách</th>
            <th>Trạng thái</th>
            <th>Nguồn</th>
            <th>Chiến dịch</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
