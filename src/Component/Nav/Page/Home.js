import React, { useState, useEffect } from "react";
import { data } from "../data/dataTable";
import { dataGroup } from "../data/DataCompainGroup";
import moment from "moment/moment";
import "../scssAll/Home.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
export const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [jsonData, setJsonData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setJsonData(data);
  }, []);

  const toggleActive = (val) => {
    setSelectedItem(val);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmAction = () => {
    const updatedData = jsonData.map((val) => {
      if (val.id === selectedItem.id) {
        return { ...val, active: selectedItem.active === 1 ? 0 : 1 };
      }
      return val;
    });

    setJsonData(updatedData);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="main-content page_home">
        <div className="nav-search">
          <div className="search-auto">
            <div className="item-search">
              <div className="box-search">
                <div className="icon-search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="content-search">
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Tên automation"
                  />
                </div>
              </div>
            </div>
            <div className="group-search">
              <div className="group-search2">
                <select className=" group-select">
                  <option selected> Nhóm Automation</option>
                  {dataGroup.map((option) => (
                    <option value={option.id}>{option.group_name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="creator-search">
              <div className="select-search">
                <select className="creator-select">
                  <option selected>Người tạo</option>
                  {data.map((option1) => (
                    <option value={option1.id}>
                      {option1.creator_info.display_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="date-created">
              <div className="icon-date">
                <i class="fa-regular fa-calendar"></i>
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Ngày tạo"
                isClearable
              />
            </div>
          </div>
          <div className="add_button">
            <button type="button" className="btn-add">
              Thêm Mới
            </button>
          </div>
        </div>

        <table className="table-container">
          <thead className="table-thead">
            <tr>
              <th>Id</th>
              <th>Tên automation</th>
              <th>Ngày tạo</th>
              <th>Người tạo</th>
              <th>Trạng thái</th>
              <th>Chỉnh sửa</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {jsonData.map((val, index) => {
              return (
                <tr className="box-body" key={val.id}>
                  <td className="td-body">{val.id}</td>
                  <td className="td-body">{val.automation_name}</td>
                  <td className="td-body text-center">
                    {moment(val.created_at).format("DD/MM/YYYY")}
                  </td>
                  <td className="td-body">{val.creator_info.display_name}</td>
                  <td className="text-center state-body">
                    <button
                      onClick={() => toggleActive(val)}
                      className={
                        val.active === 1 ? "active-button" : "un_active"
                      }
                    >
                      {val.active === 1 ? "Đã kích hoạt" : "Chưa kích hoạt"}
                    </button>
                  </td>
                  <td className="td-icon">
                    <div>
                      <i class="fa-regular fa-pen-to-square icon-edit"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-trash icon-delete"></i>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Modal"
        overlayClassName="custom-overlay"
      >
        <div className="content-modal">
          {selectedItem && selectedItem.active === 1
            ? "Bạn có muốn hủy kích hoạt?"
            : "Bạn có muốn kích hoạt?"}
        </div>
        <button className="btn-oke" onClick={confirmAction}>
          Đồng ý
        </button>
        <button className="btn-out" onClick={closeModal}>
          Hủy bỏ
        </button>
      </Modal>
    </>
  );
};
