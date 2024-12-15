import { tableItemSelector } from '../../table/table.selector';
import { mockTableData } from '../../../__mock__/mockData';

describe('tableItemSelector', () => {
  it('should add id to each item in tableItem', () => {
    const state = { table: { tableItem: mockTableData as any } };
    
    const result = tableItemSelector(state);

    expect(result).toEqual(mockTableData.map((item,index)=>({
        ...item,
        id: index
    })));
  });

  it('should return empty array when tableItem is empty', () => {
    const state = { table: { tableItem: []} };
    
    const result = tableItemSelector(state);
    
    expect(result).toEqual([]);
  });
});
