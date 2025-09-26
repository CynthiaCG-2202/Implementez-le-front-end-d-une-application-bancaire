import { useState } from "react";
import { FaPen, FaChevronDown, FaChevronUp } from "react-icons/fa";

function TransactionRow({ transaction }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(transaction.details.category);
  const [note, setNote] = useState(transaction.details.note);
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);

  return (
    <>
      <tr className="transaction-row" onClick={() => setIsOpen(!isOpen)}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>${transaction.amount.toFixed(2)}</td>
        <td>${transaction.balance.toFixed(2)}</td>
        <td className="transaction-arrow">
          {isOpen ? <FaChevronDown className="arrow-icon" /> : <FaChevronUp className="arrow-icon" />}
        </td>
      </tr>

      {isOpen && (
        <tr className="transaction-details">
          <td colSpan="5">
            <div className="transaction-details-content">
              <div className="transaction-type">Type: {transaction.details.type}</div>

              <div className="transaction-category">
                Catégorie:{" "}
                {isEditingCategory ? (
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    onBlur={() => setIsEditingCategory(false)}
                    autoFocus
                  />
                ) : (
                  <>
                    {category}{" "}
                    <FaPen
                      onClick={(e) => { e.stopPropagation(); setIsEditingCategory(true); }}
                      className="edit-icon"
                    />
                  </>
                )}
              </div>

              <div className="transaction-note">
                Note:{" "}
                {isEditingNote ? (
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    onBlur={() => setIsEditingNote(false)}
                    autoFocus
                  />
                ) : (
                  <>
                    {note}{" "}
                    <FaPen
                      onClick={(e) => { e.stopPropagation(); setIsEditingNote(true); }}
                      className="edit-icon"
                    />
                  </>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default TransactionRow;
