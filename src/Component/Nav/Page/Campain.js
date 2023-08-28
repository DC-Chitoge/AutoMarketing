import React from "react";
import "../scssAll/Campain.scss";
import { dataCampain } from "../data/DataCampain";
import moment from "moment";
function Campain() {
  return (
    <div className="Container">
      <div className="nav-campain">
        <div className="nav-header">
          <div className="nav-search">
            <div className="search-campain">
              <div className="search-icon">
                <i class="fa-solid fa-magnifying-glass icon"></i>
              </div>
              <div className="search-input">
                <input
                  type="text"
                  className="input-search"
                  placeholder="Tên chiến dịch"
                />
              </div>
            </div>
            <div className="creator-campain">
              <select className="select-creator">
                <option selected>Người tạo chiến dịch</option>
                {dataCampain.map((option) => {
                  return (
                    <option value={option.id}>
                      {option.resp_display_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="used-campain">
              <select className="select-used">
                <option selected>Đang sử dụng</option>
                <option>Đã xóa</option>
              </select>
            </div>
            <div className="time-campain">
              <div className="icon-time">
                <i class="fa-regular fa-clock clocl"></i>
              </div>
              <div className="time-check">
                <select className="select-time">
                  <option selected>Tất cả</option>
                  <option>Tuần này</option>
                  <option>Tuần trước</option>
                  <option>Tháng này</option>
                  <option>Tháng trước</option>
                  <option>Quý này</option>
                  <option>Quý trước</option>
                  <option>Năm nay</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-campain">
          <button className="btn-add">Thêm mới</button>
        </div>
      </div>
      <div className="table-campain">
        <table className="table table-secondary table-bordered table-hover custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên chiến dịch</th>
              <th>Ngày tạo</th>
              <th>Người phụ trách</th>
              <th>Số cơ hội mới trong tháng</th>
              <th>Tổng số khách</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {dataCampain.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.campaign_name}</td>
                  <td>{moment(val.created_at).format("DD/MM/YYYY")}</td>
                  <td>{val.resp_display_name}</td>
                  <td>{val.monthly_opportunity_count}</td>
                  <td>{val.total_account_count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Campain;
